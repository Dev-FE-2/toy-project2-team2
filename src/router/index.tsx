import { createBrowserRouter } from "react-router-dom";
import { MainLayout, AuthLayout, ScheduleLayout } from "@/layouts";
import Schedule from "@/pages/schedule";
import LoginPage from "@/pages/login";
import SignupPage from "@/pages/signup";
import PayPage from "@/pages/pay";
import PayCorrectionPage from "@/pages/pay-correction";
import MyPage from "@/pages/mypage";
import NotFoundPage from "@/pages/notFound";
import ComponentExample from "@/pages/componentExample";

const Router = createBrowserRouter([
	{
		element: <MainLayout />,
		children: [
			{ path: "/pay", element: <PayPage /> },
			{ path: "/pay-correction", element: <PayCorrectionPage /> },
			{ path: "/mypage", element: <MyPage /> },
			{ path: "/components", element: <ComponentExample /> },
		],
	},
	{
		element: <ScheduleLayout />,
		children: [{ path: "/", element: <Schedule /> }],
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
