import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/types/store";

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
	const isLogined = useSelector(
		(state: RootState) => state.loginAuth.isLogined,
	); // Redux store에서 인증 상태 확인
	return isLogined ? children : <Navigate to="/login" replace />;
};
