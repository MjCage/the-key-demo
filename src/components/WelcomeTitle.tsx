import { useQuery } from "@apollo/client";
import React from "react";
import { GET_USER_INFO } from "../utils/schemas";
import { SkeletonLoader } from "./SkeletonLoader";

interface WelcomeTitleProps {
	className?: string;
}

export const WelcomeTitle = ({ className }: WelcomeTitleProps) => {
	const { data: userData, loading: loadingUser } = useQuery(GET_USER_INFO);

	return (
		<h1
			className={`text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 md:text-left ${className ?? ""}`}
		>
			Willkommen{" "}
			<SkeletonLoader
				isLoading={loadingUser}
				className="h-[26px] w-40 inline-block"
			>
				<span className="font-thin">
					{userData?.Viewer?.Auth?.currentUser?.user?.name ?? "Nutzer"}!
				</span>
			</SkeletonLoader>
		</h1>
	);
};
