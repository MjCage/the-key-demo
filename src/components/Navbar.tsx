import React from "react";
import { useAuth } from "../context/authContext";
import { Button } from "./Button";

export const Navbar = () => {
	const { logout } = useAuth();

	return (
		<nav className="bg-gray-800 h-16 flex items-center">
			<div className="mx-auto w-full max-w-7xl flex justify-between items-center px-2 sm:px-6 lg:px-8">
				<img
					className="h-8 w-auto"
					src="/key-logo.png"
					alt="The logo of key technology"
				/>
				<Button label="Ausloggen" className="w-fit" onClick={logout} />
			</div>
		</nav>
	);
};
