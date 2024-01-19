import React from "react";
import { Navbar } from "../components/Navbar";
import { WelcomeTitle } from "../components/WelcomeTitle";
import { NodeList } from "../components/NodeList";

const Dashboard = () => {
	return (
		<div className="w-full h-screen overflow-hidden">
			<Navbar />
			<div className="h-full flex flex-col py-10 lg:pb-20 px-3 max-w-5xl mx-auto">
				<WelcomeTitle />
				<NodeList />
			</div>
		</div>
	);
};

export default Dashboard;
