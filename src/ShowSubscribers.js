import React, { Component, Fragment } from 'react';
import './ShowSubscribers.css';
import Header from "./Header";
import { Link } from 'react-router-dom';

class ShowSubscribers extends Component {

	deleteHandler(item) {
		this.setState((previousState) => ({
				subscribers: previousState.subscribers.filter(sub => sub.id !== item.id)
			})
		);
	}

	render() {
		return (
			<Fragment>
				{/* Fragments return children without adding extra node in actual DOM
						Shorthand: <>...</> */}
				<Header heading="Phone Directory"/>
				<div className="component-body-container">
					<Link to="/add"><button className="custom-btn primary-btn">Add</button></Link>
					<div className="grid-container heading-container">
						<span className="item-grid item-heading"> Name: </span>
						<span className="item-grid item-heading"> Phone: </span>
					</div>
					{
						this.props.subscribersList.map(item => {
							return <div key={item.id} className="grid-container">
								<span className="item-grid"> {item.name} </span>
								<span className="item-grid"> {item.phone} </span>
								<span className="item-grid">
									<button className="custom-btn secondary-btn" onClick={this.deleteHandler.bind(this, item)}>Delete</button>
								</span>
							</div>
						})
					}
				</div>
			</Fragment>
		);
	}
}

export default ShowSubscribers;
