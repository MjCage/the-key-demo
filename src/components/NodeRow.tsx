import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Node } from "../utils/types";
import { NodeItem } from "./NodeItem";

interface NodeRowProps {
	items: Node[];
	index: number;
	style: React.CSSProperties;
}

export const NodeRow = ({ items, index, style }: NodeRowProps) => {
	const item = items[index];

	if (!item) return null;

	const patchedStyle = {
		...style,
		height: Number(style.height) - 8, // matches to space-y-2
		width: "100%",
	};

	return (
		<Draggable key={item.id} draggableId={item.id} index={index}>
			{(provided, snapshot) => (
				<NodeItem
					index={index}
					item={item}
					provided={provided}
					style={patchedStyle}
					isDragging={snapshot.isDragging}
				/>
			)}
		</Draggable>
	);
};
