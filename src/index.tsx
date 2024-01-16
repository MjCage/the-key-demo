import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ApolloProvider } from "@apollo/client";
import { client } from "./utils/apollo-client";
import { AuthProvider } from "./context/authContext";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<AuthProvider>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</AuthProvider>
);
