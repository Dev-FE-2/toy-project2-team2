import { Outlet } from "react-router-dom";

const MainLayout = () => {
	return (
		<div>
			<header>Header Navigation</header>
			<main>
				<Outlet />
			</main>
		</div>
	);
};

export default MainLayout;
