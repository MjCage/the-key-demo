import { MockedProvider } from "@apollo/client/testing";
import { AuthProvider } from "../context/authContext";
import React, { ReactElement } from "react";
import { RenderOptions, render } from "@testing-library/react";

const Providers = ({
	children,
	mocks,
}: {
	children: React.ReactNode;
	mocks: any[];
}) => {
	return (
		<AuthProvider>
			<MockedProvider mocks={mocks} addTypename={false}>
				{children}
			</MockedProvider>
		</AuthProvider>
	);
};

const customRender = (
	ui: ReactElement,
	mocks: any[] = [],
	options?: Omit<RenderOptions, "wrapper">
) =>
	render(ui, {
		wrapper: (props) => <Providers {...props} mocks={mocks} />,
		...options,
	});

export * from "@testing-library/react";
export { customRender as render };
