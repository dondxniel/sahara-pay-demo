import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../layouts/Signup.layout";
import { InputField, SelectOptions } from "../widgets/Form";
import { BlockPrimaryBtn } from "../widgets/Buttons";

function Signup() {
	const navigate = useNavigate();
	const firstNameRef = useRef(null);
	const lastNameRef = useRef(null);
	const dateRef = useRef(null);
	const phoneNumberRef = useRef(null);
	const genderRef = useRef(null);
	const toCreatePin = () => {
		navigate("/create-pin");
	};
	return (
		<Layout
			title="Create your Sahara Pay Account"
			description="Let's set things up. Enter your details as they appear on your legal documents."
			backRoute="/"
			step={1}
		>
			<InputField
				label="First Name"
				type="text"
				placeholder="First Name"
				inputRef={firstNameRef}
			/>
			<InputField
				label="Last Name"
				type="text"
				placeholder="Last Name"
				inputRef={lastNameRef}
			/>
			<InputField
				label="Date of Birth"
				type="date"
				placeholder="DD/MM/YYYY"
				inputRef={dateRef}
			/>
			<InputField
				label="Phone Number"
				type="number"
				placeholder="+234 90 234 5678 901"
				inputRef={phoneNumberRef}
			/>
			<SelectOptions
				label="Gender"
				placeholder="Select Gender"
				selectRef={genderRef}
				options={["Male", "Female"]}
			/>
			<p className="signup-meta-text">
				By continuing, you accept our Terms of Service and Privacy
				Policy
			</p>
			<BlockPrimaryBtn btnText="Next" btnAction={toCreatePin} />
		</Layout>
	);
}

export default Signup;
