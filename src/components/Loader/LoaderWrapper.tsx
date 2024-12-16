import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

interface LoaderWrapperProps {
	isLoading: boolean;
	children: React.ReactNode;
}

const LoaderWrapper = ({ isLoading, children }: LoaderWrapperProps) => {
	return isLoading ? (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "60vh",
			}}
		>
			<ClipLoader
				color="#029688"
				loading={true}
				size={50}
				cssOverride={{
					borderWidth: "4px",
				}}
			/>
		</div>
	) : (
		<>{children}</>
	);
};
export default LoaderWrapper;
