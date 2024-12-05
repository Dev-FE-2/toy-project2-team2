import { createBrowserRouter } from "react-router-dom";
import { MainLayout, AuthLayout } from "@/layouts";
import HomePage from "@/pages/home";
import Schedule from "@/pages/schedule";
import LoginPage from "@/pages/login";
import SignupPage from "@/pages/signup";
import SalaryPage from "@/pages/salary";
import SalaryCorrectionPage from "@/pages/salary-correction";
import MyPage from "@/pages/mypage";
import NotFoundPage from "@/pages/notFound";

const Router = createBrowserRouter([
	{
		element: <MainLayout />,
		children: [
			{ path: "/", element: <HomePage /> },
			{ path: "/schedule", element: <Schedule /> },
			{ path: "/salary", element: <SalaryPage /> },
			{ path: "/salary-correction", element: <SalaryCorrectionPage /> },
			{ path: "/mypage", element: <MyPage /> },
		],
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
