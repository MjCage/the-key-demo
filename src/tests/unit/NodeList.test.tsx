import "@testing-library/jest-dom";
import React from "react";
import { render, screen, waitFor } from "../test-utils";
import { NodeList } from "../../components/NodeList";
import { GET_CONTENT_NODES } from "../../utils/schemas";
import { GraphQLError } from "graphql";

interface NodeEntry {
	node: {
		id: string;
		structureDefinition: {
			title: string;
		};
	};
}

const createNodeEntry = (id: string): NodeEntry => {
	return {
		node: {
			id,
			structureDefinition: {
				title: id,
			},
		},
	};
};

const generateNodeEntries = (count: number) => {
	const entries: NodeEntry[] = [];
	for (let i = 0; i < count; i++) {
		entries.push(createNodeEntry(`id_${i}`));
	}
	return entries;
};

jest.mock("react-virtualized", () => {
	const ReactVirtualized = jest.requireActual("react-virtualized");
	return {
		...ReactVirtualized,
		AutoSizer: ({ children }: any) => children({ height: 500, width: 500 }),
	};
});

test("displays error message when something went wrong", async () => {
	const mocks = [
		{
			request: {
				query: GET_CONTENT_NODES,
			},
			result: {
				errors: [new GraphQLError("Error!")],
			},
		},
	];

	render(<NodeList />, mocks);

	await waitFor(() => {
		expect(
			screen.getByText(/Ups, irgendetwas ist schief gelaufen./i)
		).toBeInTheDocument();
	});
});

test("displays skeletons while loading and hides after", async () => {
	const edges = generateNodeEntries(200);
	const mocks = [
		{
			delay: 200,
			request: {
				query: GET_CONTENT_NODES,
			},
			result: {
				data: {
					Admin: { Tree: { GetContentNodes: { edges } } },
				},
			},
		},
	];

	render(<NodeList />, mocks);

	expect(screen.getAllByTestId("skeleton-loader")).toHaveLength(5);

	await waitFor(() => {
		expect(screen.queryByTestId("skeleton-loader")).not.toBeInTheDocument();
	});
});

test("displays correct message if no nodes exist", async () => {
	const edges = generateNodeEntries(0);
	const mocks = [
		{
			request: {
				query: GET_CONTENT_NODES,
			},
			result: {
				data: {
					Admin: { Tree: { GetContentNodes: { edges } } },
				},
			},
		},
	];

	render(<NodeList />, mocks);

	await waitFor(() => {
		expect(
			screen.getByText(/Es sind keine Nodes verfügbar!/i)
		).toBeInTheDocument();
	});
});

test("renders only fraction of long node list (lazy loading)", async () => {
	const edges = generateNodeEntries(200);
	const mocks = [
		{
			request: {
				query: GET_CONTENT_NODES,
			},
			result: {
				data: {
					Admin: { Tree: { GetContentNodes: { edges } } },
				},
			},
		},
	];

	render(<NodeList />, mocks);

	await waitFor(() => {
		expect(screen.getAllByTestId("node-item").length).toBeLessThan(20);
	});
});
