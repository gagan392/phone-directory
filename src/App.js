import React, { Component, Fragment } from 'react';
import './App.css';
import Header from "./Header";

class App extends Component {

	subscribers =[
		{
			id: 1,
			name: "Gagan Raj M",
			phone: "9999999999"
		},
		{
			id: 2,
			name: "Gagan Gowda",
			phone: "8888888888"
		}
	]

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
					{
						this.subscribers.map(item => {
							return <div key={item.id} className="grid-container">
								<span className="item-grid"> {item.name} </span>
								<span className="item-grid"> {item.phone} </span>
							</div>
						})
					}
				</div>
			</Fragment>
		);
	}
}

export default App;
