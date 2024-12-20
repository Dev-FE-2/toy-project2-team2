import { createBrowserRouter } from "react-router-dom";
import { MainLayout, AuthLayout, ScheduleLayout } from "@/layouts";
import Schedule from "@/pages/schedule";
import LoginPage from "@/pages/login";
import SignupPage from "@/pages/signup";
import SalaryPage from "@/pages/salary";
import SalaryCorrectionPage from "@/pages/salary-correction";
import MyPage from "@/pages/mypage";
import NotFoundPage from "@/pages/notFound";
import ComponentExample from "@/pages/componentExample";
import { ProtectedRoute } from "./ProtectedRoute";
import MypageLayout from "@/layouts/mypage";

const Router = createBrowserRouter([
	{
		element: (
			<ProtectedRoute>
				<MainLayout />
			</ProtectedRoute>
		),
		children: [
			{ path: "/salary", element: <SalaryPage /> },
			{ path: "/salary-correction", element: <SalaryCorrectionPage /> },
			{ path: "/components", element: <ComponentExample /> },
		],
	},
	{
		element: (
			<ProtectedRoute>
				<ScheduleLayout />
			</ProtectedRoute>
		),
		children: [{ path: "/", element: <Schedule /> }],
	},
	{
		element: (
			<ProtectedRoute>
				<MypageLayout />
			</ProtectedRoute>
		),
		children: [{ path: "/mypage", element: <MyPage /> }],
	},
	{
		element: <AuthLayout />,
		children: [
			{ path: "/login", element: <LoginPage /> },
			{ path: "/signup", element: <SignupPage /> },
		],
	},
	{ path: "*", element: <NotFoundPage /> },
]);

export default Router;
