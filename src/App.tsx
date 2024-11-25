import { useState } from "react";
import "./App.css";

function App() {
	const count = useState(0);
	// var count = useState(0)
	return (
		<>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => count[1]((prevCount) => prevCount + 1)}>
					count is {count[0]}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

export default App;
