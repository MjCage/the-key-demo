import { useQuery } from "@apollo/client";
import React from "react";
import { GET_USER_INFO } from "../utils/mutations";

const Dashboard = () => {
	const { data } = useQuery(GET_USER_INFO);
	return (
		<div className="flex w-full h-screen flex-col justify-center items-center px-3">
			<h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
				Welcome{" "}
				<span className="font-thin">
					{data?.Viewer?.Auth?.currentUser?.user?.name ?? "User"}!
				</span>
			</h1>
		</div>
	);
};

export default Dashboard;
