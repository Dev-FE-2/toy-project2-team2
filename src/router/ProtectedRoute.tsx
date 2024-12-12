import { Navigate } from "react-router-dom";
import { auth } from "@/firebase";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { setIsLogined } from "@/store/slices/loginAuthSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";

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
		return <div>Loading...</div>;
	}

	if (!isLogined) {
		return <Navigate to="/login" replace />;
	}
	return children;
};
