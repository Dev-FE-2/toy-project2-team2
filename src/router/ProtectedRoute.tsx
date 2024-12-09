import { Navigate } from "react-router-dom";
import { auth } from "@/firebase";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setIsAuthenticated(true);
			} else {
				setIsAuthenticated(false);
			}
		});

		return () => unsubscribe();
	}, [auth]);

	if (isAuthenticated === null) {
		return <div>Loading...</div>;
	}
	if (!isAuthenticated) {
		return <Navigate to="/login" replace />;
	}
	return children;
};
