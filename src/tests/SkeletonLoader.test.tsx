import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "./test-utils";
import { SkeletonLoader } from "../components/SkeletonLoader";

test("hides children when is loading is set", () => {
	render(
		<SkeletonLoader isLoading>
			<div>Should be hidden.</div>
		</SkeletonLoader>
	);

	expect(screen.queryByText(/Should be hidden./i)).not.toBeInTheDocument();
});

test("displays children when is loading is not set", () => {
	render(
		<SkeletonLoader isLoading={false}>
			<div>Should be shown.</div>
		</SkeletonLoader>
	);

	expect(screen.queryByText(/Should be shown./i)).toBeInTheDocument();
});
