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
				<div className="light text-center mt-5">
					<div
						onClick={() => this.setState({ color: "red" })}
						className={
							this.state.color == "red"
								? "r-light active"
								: "r-light"
						}
					/>
					<div
						onClick={() => this.setState({ color: "yellow" })}
						className={
							this.state.color == "yellow"
								? "y-light active"
								: "y-light"
						}
					/>
					<div
						onClick={() => this.setState({ color: "green" })}
						className={
							this.state.color == "green"
								? "g-light active"
								: "g-light"
						}
					/>
					<div className="bar" />
					<div className="horBar" />
					<div className="rightBar" />
					<div className="leftBar" />
				</div>
			</>
		);
	}
}
