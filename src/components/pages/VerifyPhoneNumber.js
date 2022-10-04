import { createRef, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../layouts/Signup.layout";
import { MultipleDigitsInput } from "../widgets/Form";
import { BlockPrimaryBtn } from "../widgets/Buttons";

function VerifyPhoneNumber() {
	const digitsRef = useRef(new Array(5).fill(null).map(() => createRef()));
	const navigate = useNavigate();

	return (
		<Layout
			title="Verify Phone Number"
			description="Enter the 6-digit code we just sent via SMS to 09095461427"
			backRoute="/create-pin"
			step={4}
		>
			<div className="flex flex-col">
				<div className="mt-14">
					<MultipleDigitsInput inputRef={digitsRef} />
					<BlockPrimaryBtn
						btnText="Verify"
						btnAction={() => navigate("/welcome")}
					/>
				</div>
			</div>
		</Layout>
	);
}

export default VerifyPhoneNumber;
