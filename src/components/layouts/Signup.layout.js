import React from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";

function Signup({ children, title, description, backRoute, step }) {
	return (
		<div className="signup-layout-container">
			<div className="top-bar">
				<div className="back-btn">
					<Link className="link" to={backRoute}>
						<FaChevronLeft />
					</Link>
				</div>
				<div className="step-indicator">
					<div className="container">
						<div
							className="indicator"
							style={{ flex: step / 4 }}
							// 4, because there are only 4 steps in the signup process
						></div>
					</div>
				</div>
			</div>
			<div className="title">{title}</div>
			<p className="description">{description}</p>
			<div>{children}</div>
		</div>
	);
}

export default Signup;
