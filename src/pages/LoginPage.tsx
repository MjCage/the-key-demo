import React from "react";
import { LoginForm } from "../components/LoginForm";

const LoginPage = () => {
	return (
		<div className="flex w-full h-screen flex-col justify-center items-center px-3 pt-12 sm:pt-6 pb-36 bg-gray-200">
			<img
				className="mx-auto h-16 w-auto"
				src="/key-logo.png"
				alt="The logo of the key technology"
			/>
			<h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
				Sign in to your account
			</h1>
			<LoginForm className="max-w-sm mt-10" />
		</div>
	);
};

export default LoginPage;
