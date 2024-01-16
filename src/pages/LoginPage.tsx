import React from "react";

const LoginPage = () => {
	return (
		<div className="flex w-full h-screen flex-col justify-center items-center px-3 pt-12 sm:pt-6 pb-36 bg-gray-200">
			<img
				className="mx-auto h-16 w-auto"
				src="/key-logo.png"
				alt="The logo of the key technology"
			/>
			<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
				Sign in to your account
			</h2>
			<form
				className="w-full max-w-sm p-4 mt-10 space-y-6 bg-white rounded-xl drop-shadow-md"
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
				<button
					type="submit"
					className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>
					Sign in
				</button>
			</form>
		</div>
	);
};

export default LoginPage;
