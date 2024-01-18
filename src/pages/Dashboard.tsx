/* eslint-disable react/no-find-dom-node */

import { useQuery } from "@apollo/client";
import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import { GET_CONTENT_NODES, GET_USER_INFO } from "../utils/schemas";
import { Navbar } from "../components/Navbar";
import { SkeletonLoader } from "../components/SkeletonLoader";
import { AutoSizer, List } from "react-virtualized";
import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import { NodeRow } from "../components/NodeRow";
import { NodeItem } from "../components/NodeItem";
import { Node } from "../utils/types";

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
) => <NodeRow items={items} index={index} style={style} />;

const Dashboard = () => {
	const { data: userData, loading: loadingUser } = useQuery(GET_USER_INFO);
	const { data: nodeData, error } = useQuery(GET_CONTENT_NODES);

	const [nodes, setNodes] = useState<Node[]>();

	const onDragEnd = (result: DropResult) => {
		if (!result.destination || !nodes) return;

		setNodes(reorder(nodes, result.source.index, result.destination.index));
	};

	useEffect(() => {
		const edges = nodeData?.Admin.Tree.GetContentNodes.edges;
		if (edges) {
			setNodes(
				edges.flatMap((edge) =>
					edge
						? [
								{
									id: edge.node.id,
									title: edge.node.structureDefinition.title,
								},
							]
						: []
				)
			);
		} else {
			setNodes(undefined);
		}
	}, [nodeData]);

	if (error) {
		return (
			<div className="w-full h-screen flex items-center justify-center text-lg">
				Ups, irgendetwas ist schief gelaufen.
			</div>
		);
	}

	return (
		<div className="w-full h-screen overflow-hidden">
			<Navbar />
			<div className="h-full flex flex-col py-10 lg:pb-20 px-3 max-w-5xl mx-auto">
				<h1 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 md:text-left">
					Willkommen{" "}
					<SkeletonLoader
						isLoading={loadingUser}
						className="h-[26px] w-40 inline-block"
					>
						<span className="font-thin">
							{userData?.Viewer?.Auth?.currentUser?.user?.name ?? "User"}!
						</span>
					</SkeletonLoader>
				</h1>
				<DragDropContext onDragEnd={onDragEnd}>
					<div className="flex-grow my-10 space-y-2">
						{nodes?.length === 0 && (
							<div className="w-full text-center text-sm">
								There are no Nodes available!
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
															const whatHasMyLifeComeTo =
																ReactDOM.findDOMNode(ref);
															if (whatHasMyLifeComeTo instanceof HTMLElement) {
																droppableProvided.innerRef(
																	whatHasMyLifeComeTo as HTMLElement
																);
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
			</div>
		</div>
	);
};

export default Dashboard;
