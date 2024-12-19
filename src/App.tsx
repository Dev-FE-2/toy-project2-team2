import Router from "./router";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { darkTheme, lightTheme } from "./styles/theme";
import { ThemeProvider, useTheme } from "./context/themeContext";

const App = () => {
	return (
		<ThemeProvider>
			<ThemeConsumer />
		</ThemeProvider>
	);
};

const ThemeConsumer = () => {
	const { isDarkMode } = useTheme();
	return (
		<StyledThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
			<GlobalStyle />
			<RouterProvider router={Router} />
			<ToastContainer
				position="bottom-right"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop
				closeOnClick
				draggable
			/>
		</StyledThemeProvider>
	);
};

export default App;
