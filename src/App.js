import React, { Component, Fragment } from 'react';
import './App.css';
import Header from "./Header";

class App extends Component {
	render() {
		return (
			<Fragment>
				{/* Fragments return children without adding extra node in actual DOM
						Shorthand: <>...</> */}
				<Header />
				<div className="component-body-container">
					<button className="custom-btn primary-btn">Add</button>
					<div className="grid-container heading-container">
						<span className="item-grid item-heading"> Name: </span>
						<span className="item-grid item-heading"> Phone: </span>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default App;
