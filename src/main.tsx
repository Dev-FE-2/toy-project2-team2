import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { listenAuthChanges } from "./store/authListener.ts";
import { store } from "./store/index.ts";
import { Provider } from "react-redux";

listenAuthChanges(store.dispatch);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</StrictMode>,
);
