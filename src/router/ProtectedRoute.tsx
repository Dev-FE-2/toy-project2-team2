import { Navigate } from "react-router-dom";
import { auth } from "@/firebase";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { setIsLogined } from "@/store/slices/loginAuthSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";
import LoaderWrapper from "@/components/Loader/LoaderWrapper";

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
	const dispatch = useAppDispatch();
	const isLogined = useAppSelector((state) => state.loginAuth.isLogined);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				dispatch(setIsLogined(true));
			} else {
				dispatch(setIsLogined(false));
			}
			setIsLoading(false);
			if (!isLogined) {
				return <Navigate to="/login" replace />;
			}
		});
		return () => unsubscribe();
	}, []);

	return <LoaderWrapper isLoading={isLoading}>{children};</LoaderWrapper>;
};
