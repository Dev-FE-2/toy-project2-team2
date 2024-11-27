import Router from "./router";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, DefaultTheme } from "./styles";

const App = () => {
	return (
		<ThemeProvider theme={DefaultTheme}>
			<GlobalStyle />
			<RouterProvider router={Router} />
		</ThemeProvider>
	);
};

export default App;
