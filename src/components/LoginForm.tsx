import React from "react";
import { Button } from "./Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import { useAuth } from "../context/authContext";
import { useMutation } from "@apollo/react-hooks";
import { LOGIN_USER } from "../utils/mutations";

type Inputs = {
	email: string;
	password: string;
};

const schema = object({
	email: string()
		.required("Email is required to login.")
		.email("Invalid email address."),
	password: string().required("Password is required to authenticate."),
}).required();

interface LoginFormProps {
	className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
	const { login } = useAuth();
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<Inputs>({
		resolver: yupResolver(schema),
		mode: "onTouched",
	});

	const [loginUser, { loading }] = useMutation(LOGIN_USER, {
		update(_, { data }) {
			const accessToken =
				data?.Auth?.loginJwt?.loginResult?.jwtTokens?.accessToken;

			if (accessToken) {
				login(accessToken);
			}
		},
		onError(error) {
			console.error(error);
		},
	});

	const onSubmit = (inputs: Inputs) => {
		loginUser({
			variables: {
				input: {
					email: inputs.email,
					password: inputs.password,
				},
			},
		});
	};

	return (
		<form
			className={`w-full p-4 bg-white rounded-xl drop-shadow-md ${className ?? ""}`}
			onSubmit={handleSubmit(onSubmit)}
		>
			<label
				htmlFor="email"
				className="block mb-2 text-sm font-medium leading-6 text-gray-900"
			>
				Email address
			</label>
			<input
				autoComplete="email"
				className="block mb-1 w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
				{...register("email", { required: true })}
			/>
			<p className="text-red-500 text-xs h-2">{errors.email?.message}</p>
			<label
				htmlFor="password"
				className="block mb-2 mt-6 text-sm font-medium leading-6 text-gray-900"
			>
				Password
			</label>
			<input
				type="password"
				autoComplete="current-password"
				className="block mb-1 w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
				{...register("password", { required: true })}
			/>
			<p className="text-red-500 text-xs mb-8 h-2">
				{errors.password?.message}
			</p>
			<Button
				type="submit"
				label="Sign in"
				className="w-full"
				disabled={!isValid}
				isLoading={loading}
			/>
		</form>
	);
};
