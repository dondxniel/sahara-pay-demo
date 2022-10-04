import React from "react";
import { BlockPrimaryBtn } from "../widgets/Buttons";

function Welcome() {
	return (
		<div className="flex flex-col justify-center flex-1 mx-10 text-center">
			<div className="content-container">
				<div className="topic ">Welcome to Sahara Pay, Amadi</div>
				<p className="details mt-7 mb-12">
					Your account has been created. We’ll need a bit more
					information later to fully activate it, but until then, you
					can explore the app
				</p>

				<BlockPrimaryBtn link="/home" btnText="Explore Sahara Pay" />
			</div>
		</div>
	);
}

export default Welcome;
