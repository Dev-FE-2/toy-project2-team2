import { createBrowserRouter } from "react-router-dom";
import HomePage from "@pages/home";
import LoginPage from "@pages/login";
import MainLayout from "@/layouts/main";
import SignupPage from "@pages/signup";
import PayPage from "@pages/pay";
import PayCorrectionPage from "@pages/pay-correction";
import MyPage from "@pages/mypage";
import NotFoundPage from "@pages/notFound";

const Router = createBrowserRouter([
	{
		element: <MainLayout />,
		children: [
			{ path: "/", element: <HomePage /> },
			{ path: "/login", element: <LoginPage /> },
			{ path: "/signup", element: <SignupPage /> },
			{ path: "/pay", element: <PayPage /> },
			{ path: "/pay-correction", element: <PayCorrectionPage /> },
			{ path: "/mypage", element: <MyPage /> },
			{ path: "*", element: <NotFoundPage /> },
		],
	},
]);

export default Router;
