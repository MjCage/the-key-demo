import { useQuery } from "@apollo/client";
import React from "react";
import { GET_USER_INFO } from "../utils/mutations";
import { Navbar } from "../components/Navbar";
import { SkeletonLoader } from "../components/SkeletonLoader";

const Dashboard = () => {
	const { data, loading } = useQuery(GET_USER_INFO);

	// ToDo: Define error case

	return (
		<div className="w-full h-screen">
			<Navbar />
			<div className="flex flex-col px-3 max-w-5xl mx-auto">
				<h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 md:text-left">
					Welcome{" "}
					<SkeletonLoader
						isLoading={loading}
						className="h-[26px] w-40 inline-block"
					>
						<span className="font-thin">
							{data?.Viewer?.Auth?.currentUser?.user?.name ?? "User"}!
						</span>
					</SkeletonLoader>
				</h1>
			</div>
		</div>
	);
};

export default Dashboard;
