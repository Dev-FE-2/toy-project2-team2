import { createBrowserRouter} from 'react-router-dom';
import HomePage from '../pages/home';
import LoginPage from '../pages/login';
import MainLayout from '../layouts/main';
import SignupPage from 'src/pages/signup';
import PayPage from 'src/pages/pay';
import PayCorrectionPage from 'src/pages/pay-correction';
import MyPage from 'src/pages/mypage';
import NotFoundPage from 'src/pages/notFound';
// TODO: 경로별칭 적용예정

const Router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/login', element: <LoginPage /> },
      { path: '/signup', element: <SignupPage /> },
      { path: '/pay', element: <PayPage /> },
      { path: '/pay-correction', element: <PayCorrectionPage /> },
      { path: '/mypage', element: <MyPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

export default Router;
