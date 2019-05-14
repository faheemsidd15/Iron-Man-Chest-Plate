import React from "react"
import logo from "./logo.svg"
import "./App.css"
import ChestPiece from "./components/ChestPiece"

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<span style={{ color: "white" }}>Regular logo</span>
				<img src={logo} className="App-logo" alt="logo" />
				<hr style={{ width: "100%" }} />
				<span style={{ color: "white" }}>Converted Svg as a component</span>

				<ChestPiece className="plate" alt="chestpiece" />
			</header>
		</div>
	)
}

export default App
