import React, { Component, Fragment } from 'react';

class App extends Component {
	render() {
		return (
			<Fragment>
				{/* Fragments return children without adding extra node in actual DOM
						Shorthand: <>...</> */}
				{/* <div className="header">Phone Directory</div>
				<button>Add</button>
				<div>
					<span> Name: </span><br />
					<span> Phone: </span>
				</div> */}
				<label htmlFor="name">Name: </label>
				<input type="text" id="name" placeholder="Type Here" defaultValue="Gagan"/>
			</Fragment>
		);
	}
}

export default App;
