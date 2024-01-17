import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	label: string;
	className?: string;
	isLoading?: boolean;
}

export const Button = ({
	label,
	className,
	isLoading,
	...props
}: ButtonProps) => {
	return (
		<button
			className={`flex justify-center items-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 disabled:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${className ?? ""}`}
			disabled={isLoading || props.disabled}
			{...props}
		>
			{isLoading ? (
				<>
					<div className="mr-2 inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
					Loading...
				</>
			) : (
				label
			)}
		</button>
	);
};
