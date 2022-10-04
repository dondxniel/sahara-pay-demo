import React from "react";
import logo from "../../assets/images/SaharaPay.png";
import { BlockPrimaryBtn } from "../widgets/Buttons";

function Steppers({ topic, details, StepImg, btnText, btnAction }) {
	return (
		<div className="stepper">
			<div className="img-container">
				<img src={logo} alt="Blue Logo" />
			</div>
			<div className="content-container">
				<div
					className="topic"
					dangerouslySetInnerHTML={{ __html: topic }}
				></div>
				<p className="details">{details}</p>
				<div className="img-container flex flex-row justify-center">
					<StepImg />
				</div>
				<BlockPrimaryBtn btnAction={btnAction} btnText={btnText} />
				<p>
					Already have an account?{" "}
					<span className="link">Sign in</span>
				</p>
			</div>
		</div>
	);
}

export default Steppers;
