import Router from "./router";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, DefaultTheme } from "./styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
	return (
		<ThemeProvider theme={DefaultTheme}>
			<GlobalStyle />
			<RouterProvider router={Router} />
			<ToastContainer
				position="bottom-right"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={true}
				closeOnClick
				draggable
			/>
		</ThemeProvider>
	);
};

export default App;
