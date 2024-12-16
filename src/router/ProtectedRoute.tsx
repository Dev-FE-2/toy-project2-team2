import { Navigate } from "react-router-dom";
import { auth } from "@/firebase";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { setIsLogined } from "@/store/slices/loginAuthSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";
import ClipLoader from "react-spinners/ClipLoader";

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
	const dispatch = useAppDispatch();
	const isLogined = useAppSelector((state) => state.loginAuth.isLogined);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				dispatch(setIsLogined(true));
			} else {
				dispatch(setIsLogined(false));
			}
			setIsLoading(false);
		});
		return () => unsubscribe();
	}, []);

	if (isLoading) {
		return (
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
		);
	}

	if (!isLogined) {
		return <Navigate to="/login" replace />;
	}
	return children;
};
