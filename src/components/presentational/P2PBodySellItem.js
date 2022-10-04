import React from "react";
import kuda from "../../assets/images/kuda.svg";
import opay from "../../assets/images/opay.svg";

function P2PBodyItem() {
	return (
		<div className="flex flex-row mt-4 border-b-2 pb-2">
			<div>
				<div style={{ color: "var(--primary)" }}>do**@**.com</div>
				<div className="my-2 text-2xs text-slate-500">
					<div>
						Amount <b>91.33187 USDT</b>
					</div>
					<div>
						Limit <b>No - N9800</b>
					</div>
				</div>
				<div className="flex flex-row">
					<img className="mr-2" src={opay} alt="opay" />
					<img className="mr-2" src={kuda} alt="kuda" />
				</div>
			</div>
			<div className="ml-auto text-end">
				<div className="text-2xs text-slate-500">234 Order(s)</div>
				<div className="my-2 text-slate-500">
					<div className="text-2xs">Price</div>
					<div style={{ color: "var(--danger)" }}>
						<b>N664</b>
					</div>
					<div className="mt-4">
						<button className="bg-red-500 px-10 rounded-md text-white">
							<b>Buy</b>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default P2PBodyItem;
