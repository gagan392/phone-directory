import React, { Component } from 'react';
import Header from "./Header";
import './AddSubscriber.css';
import { Link } from 'react-router-dom';

class AddSubscriber extends Component {

	constructor(props) {
		super(props);
		this.state = {
			id: 0,
			name: '',
			phone: ''
		}
	}

	onInputChangeHandler = (e) => {
		const state = this.state;
		state[e.target.name] = e.target.value;
		this.setState(state);
	}

	onFormSubmitHandler = (e) => {
		e.preventDefault();
		if(!this.state.name || !this.state.phone) {
			this.props.history.push("/");
			return;
		}
		this.props.addSubscriberHandler(this.state);
		this.setState({id:0, name: '', phone: ''});
		this.props.history.push("/");
	}

	render() {
		const { name, phone } = this.state;
		return (
			<div>
                <Header heading="Add Subscriber" />
                <div className="component-body-container">
                    <Link to="/"><button className="custom-btn secondary-btn">Back</button></Link>

                    <form className="subscriber-form" onSubmit={this.onFormSubmitHandler.bind(this)}>
                        <label htmlFor="name" className="label-control">Name: </label><br/>
                        <input id="name" type="text" className="input-control" name="name" onChange={this.onInputChangeHandler}/><br/><br/>
                        <label htmlFor="phone" className="label-control">Phone: </label><br/>
                        <input id="phone" type="text" className="input-control" name="phone" onChange={this.onInputChangeHandler}/><br/><br/>

                        <div className="subscriber-info-container">
                            <span className="subscriber-to-add-heading">Subscriber to be added: </span><br/>
                            <span className="subscriber-info">Name: {name}</span><br/>
                            <span className="subscriber-info">Phone: {phone}</span><br/>
                        </div>

                        <button type="submit" className="custom-btn primary-btn">Add</button>
                    </form>
                </div>
            </div>
		)
	}
}

export default AddSubscriber;
