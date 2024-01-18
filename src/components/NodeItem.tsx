import React, { memo } from "react";
import { DraggableProvided } from "react-beautiful-dnd";
import { Node } from "../utils/types";

interface NodeItemProps {
	item: Node;
	index: number;
	style: React.CSSProperties;
	provided: DraggableProvided;
	isDragging: boolean;
}

const NodeItemComponent = memo(
	({ item, style, provided, isDragging }: NodeItemProps) => (
		<div
			data-index={item.id}
			data-testid={item.id}
			ref={provided.innerRef}
			{...provided.draggableProps}
			{...provided.dragHandleProps}
			data-is-dragging={isDragging}
			style={{
				...style,
				...provided.draggableProps.style,
			}}
			className={`flex items-center justify-between rounded px-4 mb-4 ${isDragging ? "bg-indigo-200" : "bg-gray-300"}`}
		>
			{item.title}
			<img src="/drag-icon.svg" />
		</div>
	)
);

NodeItemComponent.displayName = "NodeItemComponent";

export const NodeItem = memo(NodeItemComponent);
