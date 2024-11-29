import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/home";
import LoginPage from "@/pages/login";
import SignupPage from "@/pages/signup";
import PayPage from "@/pages/pay";
import PayCorrectionPage from "@/pages/pay-correction";
import MyPage from "@/pages/mypage";
import NotFoundPage from "@/pages/notFound";
import MainLayout from "@/layouts/main";
import AuthLayout from "@/layouts/auth";

const Router = createBrowserRouter([
	{
		element: <MainLayout />,
		children: [
			{ path: "/", element: <HomePage /> },
			{ path: "/pay", element: <PayPage /> },
			{ path: "/pay-correction", element: <PayCorrectionPage /> },
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
