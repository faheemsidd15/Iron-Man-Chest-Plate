import React from "react"
import logo from "./logo.svg"
import "./App.css"
import styled from "styled-components"
import ChestPiece from "./components/ChestPiece"

const SvgContainer = styled.div`
	height: 500px;
	width: 500px;
`

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<span style={{ color: "white" }}>Regular logo</span>
				<img src={logo} className="App-logo" alt="logo" />
				<hr style={{ width: "100%" }} />
				<span style={{ color: "white" }}>Converted Svg as a component</span>

				<ChestPiece />
			</header>
		</div>
	)
}

export default App
