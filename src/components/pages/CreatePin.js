import { createRef, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../layouts/Signup.layout";
import { MultipleDigitsInput } from "../widgets/Form";
import lockIcon from "../../assets/images/padlock.svg";
import { BlockPrimaryBtn } from "../widgets/Buttons";

function CreatePin() {
	const digitsRef = useRef(new Array(4).fill(null).map(() => createRef()));
	const navigate = useNavigate();
	return (
		<Layout
			title="Create Pin"
			description="Set your private 4-digit PIN to secure your account. Never disclose this to anyone!"
			backRoute="/signup"
			step={2}
		>
			<div className="flex flex-col">
				<div className="mt-14 flex flex-row justify-center">
					<img src={lockIcon} alt="lock icon" />
				</div>
				<div className="mt-14">
					<MultipleDigitsInput inputRef={digitsRef} />
					<BlockPrimaryBtn
						btnText="Create"
						btnAction={() => navigate("/verify-phone-number")}
					/>
				</div>
			</div>
		</Layout>
	);
}

export default CreatePin;
