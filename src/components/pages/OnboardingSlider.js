import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/SaharaPay.svg";
import Steppers from "../presentational/Steppers";
import step1 from "../../assets/images/step1.svg";
import step2 from "../../assets/images/step2.svg";
import step3 from "../../assets/images/step3.svg";

function OnboardingSlider() {
	const [displaySplash, setDisplaySplash] = useState(true);
	const [activeStep, setActiveStep] = useState(0);
	const navigate = useNavigate();
	useEffect(() => {
		setTimeout(() => {
			setDisplaySplash(false);
		}, 2000);
	});
	const nextStep = () => {
		let maxIndex = steppersData.length - 1;
		if (activeStep < maxIndex) return setActiveStep(activeStep + 1);
	};
	const toSignup = () => navigate("/signup");

	const steppersData = [
		{
			topic: "Go Beyond Banking",
			details:
				"Welcome to the future, Sahara Pay is your passport to world class financial services built just for you",
			stepImg: () => <img src={step1} alt="Step 1" />,
			btnText: "Next",
			btnAction: () => nextStep(),
		},
		{
			topic: "Stay on top of your finances.<br/>Anytime, Anywhere.",
			details:
				"Sahara Pay makes financial services faster, cheaper and more convenient. You can access the app 24/7, wherever you are.",
			stepImg: () => <img src={step2} alt="Step 2" />,
			btnText: "Next",
			btnAction: () => nextStep(),
		},
		{
			topic: "Trusted By Millions.",
			details:
				"With Sahara Pay’s market-leading service already used by millions of people just like you, you’re in very good company.",
			stepImg: () => <img src={step3} alt="Step 3" />,
			btnText: "Signup",
			btnAction: () => toSignup(),
		},
	];
	return (
		<div className="home-body">
			{/* Splash screens */}
			{displaySplash && (
				<div className="splash-screen">
					<img src={logo} alt="logo" />
				</div>
			)}
			{!displaySplash && (
				<Steppers
					topic={steppersData[activeStep].topic}
					details={steppersData[activeStep].details}
					StepImg={steppersData[activeStep].stepImg}
					btnText={steppersData[activeStep].btnText}
					btnAction={steppersData[activeStep].btnAction}
				/>
			)}
		</div>
	);
}

export default OnboardingSlider;
