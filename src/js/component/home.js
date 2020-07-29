import React, { Component } from "react";

//create your first component
export class Home extends Component {
	constructor() {
		super();
		this.state = {
			color: ""
		};
	}

	render() {
		let redOn = "";
		let yellowOn = "";
		let greenOn = "";
		if (this.state.color === "red") {
			redOn = "active";
		}
		if (this.state.color === "yellow") {
			yellowOn = "active";
		}
		if (this.state.color === "green") {
			greenOn = "active";
		}
		return (
			<>
				<div className="bar">bar</div>
				<div className="light text-center mt-5">
					<div
						onClick={() => this.setState({ color: "red" })}
						className={"r-light " + redOn}>
						red light
					</div>
					<div
						onClick={() => this.setState({ color: "yellow" })}
						className={"y-light " + yellowOn}>
						yellow light
					</div>
					<div
						onClick={() => this.setState({ color: "green" })}
						className={"g-light " + greenOn}>
						green light
					</div>
				</div>
			</>
		);
	}
}
