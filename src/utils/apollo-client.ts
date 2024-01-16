import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { AUTH_TOKEN } from "./contants";

const httpLink = createHttpLink({
	uri: "https://staging.api.constellation.academy/api/graphql",
});

const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem(AUTH_TOKEN);
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : "",
		},
	};
});

export const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});
