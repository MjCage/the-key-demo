/* eslint-disable react/no-find-dom-node */

import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { GET_CONTENT_NODES } from "../utils/schemas";
import { Node } from "../utils/types";
import { NodeRow } from "./NodeRow";
import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import { NodeItem } from "./NodeItem";
import { AutoSizer, List } from "react-virtualized";
import { SkeletonLoader } from "./SkeletonLoader";
import { REORDER_ACTIONS } from "../utils/contants";

interface Action {
	movedItemId: string;
	newIndex: number;
}

const reorder = (
	list: Node[],
	startIndex: number,
	endIndex: number
): Node[] => {
	const result = Array.from(list);
	const [removed] = result.splice(startIndex, 1);
	result.splice(endIndex, 0, removed);

	return result;
};

const rowRenderer = (
	items: Node[],
	index: number,
	style: React.CSSProperties
) =>
	items[index] ? (
		<NodeRow items={items} index={index} style={style} key={items[index].id} />
	) : null;

export const NodeList = () => {
	const { data: nodeData, error } = useQuery(GET_CONTENT_NODES);

	const [nodes, setNodes] = useState<Node[]>();
	const [reorderActions, setReorderActions] = useState<Action[]>([]);

	const applyReorderActions = (nodes: Node[], actions: Action[]) => {
		const reorderedNodes = [...nodes];

		actions.forEach((action) => {
			const { movedItemId, newIndex } = action;

			const movedItemIndex = reorderedNodes.findIndex(
				(node) => node.id === movedItemId
			);

			if (movedItemIndex === -1) {
				return;
			}

			const [movedItem] = reorderedNodes.splice(movedItemIndex, 1);

			reorderedNodes.splice(newIndex, 0, movedItem);
		});

		return reorderedNodes;
	};

	const onDragEnd = (result: DropResult) => {
		try {
			if (
				!result.destination ||
				!nodes ||
				result.source.index === result.destination.index
			) {
				return;
			}

			const newNodes = reorder(
				nodes,
				result.source.index,
				result.destination.index
			);
			setNodes(newNodes);

			const newIndex = result.destination.index;
			const movedItemId = newNodes[newIndex].id;

			const newAction = {
				movedItemId,
				newIndex,
			};

			const updatedActions = [...reorderActions, newAction];
			setReorderActions(updatedActions);
			localStorage.setItem(REORDER_ACTIONS, JSON.stringify(updatedActions));
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		try {
			const edges = nodeData?.Admin.Tree.GetContentNodes.edges;
			if (edges) {
				let newNodes = edges.flatMap((edge) =>
					edge
						? [
								{
									id: edge.node.id,
									title: edge.node.structureDefinition.title,
								},
							]
						: []
				);

				const storedActions = localStorage.getItem(REORDER_ACTIONS);
				if (storedActions) {
					const actions = JSON.parse(storedActions);
					setReorderActions(actions);
					newNodes = applyReorderActions(newNodes, actions);
				}

				setNodes(newNodes);
			} else {
				setNodes(undefined);
			}
		} catch (error) {
			setNodes(undefined);
			console.error(error);
		}
	}, [nodeData]);

	if (error) {
		return (
			<div className="w-full h-full flex items-center justify-center text-lg">
				Ups, irgendetwas ist schief gelaufen.
			</div>
		);
	}

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<div className="flex-grow my-10 space-y-2">
				{nodes?.length === 0 && (
					<div className="w-full text-center text-sm">
						Es sind keine Nodes verfügbar!
					</div>
				)}
				{nodes ? (
					<Droppable
						mode="virtual"
						droppableId="column"
						renderClone={(provided, snapshot, rubric) => (
							<NodeItem
								provided={provided}
								isDragging={snapshot.isDragging}
								item={nodes[rubric.source.index]}
								index={rubric.source.index}
								style={{}} // Style needs to be defined if required
							/>
						)}
					>
						{(droppableProvided, snapshot) => {
							const itemCount = snapshot.isUsingPlaceholder
								? nodes.length + 1
								: nodes.length;

							return (
								<AutoSizer>
									{({ height, width }) => (
										<List
											width={width}
											height={height}
											rowHeight={80}
											rowCount={itemCount}
											ref={(ref) => {
												if (ref) {
													const inner = ReactDOM.findDOMNode(ref);
													if (inner instanceof HTMLElement) {
														droppableProvided.innerRef(inner as HTMLElement);
													}
												}
											}}
											rowRenderer={({ index, style }) =>
												rowRenderer(nodes, index, style)
											}
										/>
									)}
								</AutoSizer>
							);
						}}
					</Droppable>
				) : (
					[0, 1, 2, 3, 5].map((i) => (
						<SkeletonLoader className="w-full h-20" key={i} isLoading />
					))
				)}
			</div>
		</DragDropContext>
	);
};
