import "@testing-library/jest-dom";
import React from "react";
import { render, screen, waitFor } from "./test-utils";
import { WelcomeTitle } from "../components/WelcomeTitle";
import { GET_USER_INFO } from "../utils/schemas";

test("displays skeleton while loading", async () => {
	const mocks = [
		{
			delay: Infinity,
			request: {
				query: GET_USER_INFO,
			},
			result: {
				data: {
					Viewer: { Auth: { currentUser: { user: { name: "Tester" } } } },
				},
			},
		},
	];

	render(<WelcomeTitle />, mocks);

	await waitFor(() => {
		expect(screen.queryByText(/Tester!/i)).not.toBeInTheDocument();
	});
});

test("displays placeholder when no username exists", async () => {
	const mocks = [
		{
			request: {
				query: GET_USER_INFO,
			},
			result: undefined,
		},
	];

	render(<WelcomeTitle />, mocks);

	await waitFor(() => {
		expect(screen.queryByText(/Nutzer!/i)).toBeInTheDocument();
	});
});

test("displays username after fetching", async () => {
	const mocks = [
		{
			delay: 30,
			request: {
				query: GET_USER_INFO,
			},
			result: {
				data: {
					Viewer: { Auth: { currentUser: { user: { name: "Tester" } } } },
				},
			},
		},
	];

	render(<WelcomeTitle />, mocks);

	await waitFor(() => {
		expect(screen.queryByText(/Tester!/i)).toBeInTheDocument();
	});
});
