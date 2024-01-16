import React from "react";
import { Button } from "./Button";

interface LoginFormProps {
	className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
	return (
		<form
			className={`w-full p-4 space-y-6 bg-white rounded-xl drop-shadow-md ${className ?? ""}`}
			action="#"
			method="POST"
		>
			<label
				htmlFor="email"
				className="block text-sm font-medium leading-6 text-gray-900"
			>
				Email address
			</label>
			<input
				id="email"
				name="email"
				type="email"
				autoComplete="email"
				required
				className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
			/>
			<label
				htmlFor="password"
				className="block text-sm font-medium leading-6 text-gray-900"
			>
				Password
			</label>
			<input
				id="password"
				name="password"
				type="password"
				autoComplete="current-password"
				required
				className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
			/>
			<Button type="submit" label="Sign in" />
		</form>
	);
};
