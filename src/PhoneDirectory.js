import React, { Component } from 'react';
import AddSubscriber from "./AddSubscriber";
import ShowSubscribers from "./ShowSubscribers";
import { BrowserRouter as Router, Route } from "react-router-dom";

class PhoneDirectory extends Component {

	constructor(props) {
		super(props);
		this.state = {
			subscribers: [{
				id: 1,
				name: 'Ramesh Rana',
				phone: '9999999999'
			}, {
				id: 2,
				name: 'Suresh Sana',
				phone: '8888888888'
			}]
		};
	}

	addSubscriberHandler = (newSubscriber) => {
		const subscribersList = this.state.subscribers;
		if (this.state.subscribers.length > 0) {
			newSubscriber.id = subscribersList[subscribersList.length - 1].id + 1;
		} else {
		}
		subscribersList.push(newSubscriber);
		this.setState({ subscribers: subscribersList });
	}

	deleteSubscriberHandler = (subscriberId) => {
		let subscriberList = this.state.subscribers.filter(item => item.id !== subscriberId);
		this.setState({ subscribers: subscriberList});
	}
	render() {
		return (
			<Router>
				<div>
					<Route exact path="/" render={(props) => <ShowSubscribers {...props} subscribersList={this.state.subscribers} deleteSubscriberHandler={this.deleteSubscriberHandler} />} />
					<Route exact path="/add" render={({history}, props) => <AddSubscriber {...props} history={history} addSubscriberHandler={this.addSubscriberHandler} />} />
					{/* <AddSubscriber addSubscriberHandler={this.addSubscriberHandler} />
					<ShowSubscribers subscribersList={this.state.subscribers} /> */}
				</div>
			</Router>
		)
	}
}

export default PhoneDirectory;
