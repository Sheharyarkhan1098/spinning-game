/** @format */

import React from "react";
import ReactDOM from "react-dom";

import Wheel from "./components/wheel";

import "./styles.css";

export class App extends React.Component {
	// constructor() {
	// 	super();
	// }

	render() {
		const places = [
			"Pizzas",
			"Sandwiches",
			"Salads",
			"Soup",
			"Japanese food",
			"Pastas",
		];
		// const places = [
		// 	{ value: "Pizzas", probability: "0.5" },
		// 	{ value: "Sandwiches", probability: "0.5" },
		// 	{ value: "Salads", probability: "0.5" },
		// 	{ value: "Soup", probability: "0.5" },
		// 	{ value: "Japanese food", probability: "0.5" },
		// 	{ value: "Pastas", probability: "0.5" },
		// ];
		return (
			<div className="App">
				<h1>What should you eat today?</h1>
				<Wheel items={places} />
			</div>
		);
	}
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
