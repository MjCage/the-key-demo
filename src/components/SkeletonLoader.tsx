import React from "react";

interface SkeletonLoaderProps {
	isLoading: boolean;
	children?: React.ReactNode;
	className?: string;
}

export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
	isLoading,
	children,
	className,
}) => {
	if (isLoading) {
		return (
			<div
				data-testid="skeleton-loader"
				className={`bg-gray-300 rounded animate-pulse ${className ?? ""}`}
			/>
		);
	}

	return children;
};
