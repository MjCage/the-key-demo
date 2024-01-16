import { useReducer } from "react";
import { AUTH_TOKEN } from "../utils/contants";
import { JwtPayload, jwtDecode } from "jwt-decode";
import { createContainer } from "unstated-next";

type AuthState = {
	user: JwtPayload | null;
};

type AuthAction = { type: "LOGIN"; payload: JwtPayload } | { type: "LOGOUT" };

const loadInitialState = (): AuthState => {
	const token = localStorage.getItem(AUTH_TOKEN);

	if (token) {
		const decodedToken = jwtDecode(token);

		if ((decodedToken.exp ?? 0) * 1000 < Date.now()) {
			localStorage.removeItem(AUTH_TOKEN);
			return { user: null };
		}

		return { user: decodedToken };
	}

	return { user: null };
};

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
	switch (action.type) {
		case "LOGIN":
			return {
				...state,
				user: action.payload,
			};
		case "LOGOUT":
			return {
				...state,
				user: null,
			};
		default:
			return state;
	}
};

const useAuthInner = () => {
	const [authState, dispatch] = useReducer(authReducer, loadInitialState());

	const login = (token: string) => {
		const userData = jwtDecode(token);
		localStorage.setItem(AUTH_TOKEN, token);
		dispatch({
			type: "LOGIN",
			payload: userData,
		});
	};

	const logout = () => {
		localStorage.removeItem(AUTH_TOKEN);
		dispatch({ type: "LOGOUT" });
	};

	return { user: authState.user, login, logout };
};

const { Provider: AuthProvider, useContainer: useAuth } =
	createContainer(useAuthInner);

export { AuthProvider, useAuth };
