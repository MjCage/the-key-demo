import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { GET_CONTENT_NODES, GET_USER_INFO } from "../utils/schemas";
import { Navbar } from "../components/Navbar";
import { SkeletonLoader } from "../components/SkeletonLoader";

interface Node {
	id: string;
	title: string;
}

const Dashboard = () => {
	const { data: userData, loading: loadingUser } = useQuery(GET_USER_INFO);
	const { data: nodeData } = useQuery(GET_CONTENT_NODES);

	const [nodes, setNodes] = useState<Node[]>();

	useEffect(() => {
		const edges = nodeData?.Admin.Tree.GetContentNodes.edges;
		if (edges) {
			setNodes(
				edges.flatMap((edge) =>
					edge
						? [
								{
									id: edge.node.id,
									title: edge.node.structureDefinition.title,
								},
							]
						: []
				)
			);
		} else {
			setNodes(undefined);
		}
	}, [nodeData]);

	// ToDo: Define error case

	return (
		<div className="w-full h-screen overflow-hidden">
			<Navbar />
			<div className="h-full flex flex-col py-10 lg:pb-20 px-3 max-w-5xl mx-auto">
				<h1 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 md:text-left">
					Welcome{" "}
					<SkeletonLoader
						isLoading={loadingUser}
						className="h-[26px] w-40 inline-block"
					>
						<span className="font-thin">
							{userData?.Viewer?.Auth?.currentUser?.user?.name ?? "User"}!
						</span>
					</SkeletonLoader>
				</h1>
				<div className="flex-grow my-10 overflow-y-auto space-y-2">
					{nodes?.length === 0 && (
						<div className="w-full text-center text-sm">
							There are no Nodes available!
						</div>
					)}
					{nodes
						? nodes.map((node) => (
								<div
									className="w-full h-20 p-3 flex flex-col justify-center bg-gray-300 rounded"
									key={node.id}
								>
									{node.title}
								</div>
							))
						: [0, 1, 2, 3, 5].map((i) => (
								<SkeletonLoader className="w-full h-20" key={i} isLoading />
							))}
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
