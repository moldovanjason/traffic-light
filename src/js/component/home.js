import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	var color = "";
	var redOn = "";
	if (color == "red") redOn = "active";
	var yellowOn = "";
	if (color == "yellow") yellowOn = "active";
	var greenOn = "";
	if (color == "green") greenOn = "active";
	return (
		<>
			<div className="bar">bar</div>
			<div className="light text-center mt-5">
				<div
					onClick={() => (color = "red")}
					className={"r-light" + redOn}>
					red light
				</div>
				<div onClick={"myFunction()"} className={"y-light" + yellowOn}>
					yellow light
				</div>
				<div onClick={"myFunction()"} className={"g-light" + greenOn}>
					green light
				</div>
			</div>
		</>
	);
}
