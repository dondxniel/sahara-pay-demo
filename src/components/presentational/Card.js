import React from "react";
import { FaEyeSlash, FaPlus, FaWallet } from "react-icons/fa";
import userShield from "../../assets/images/user-shield.svg";

function Card() {
	return (
		<div className="card-single flex flex-col text-2xs w-4/5 mr-3">
			<div className="card-1 shadow-lg">
				<div className="top p-5">
					<div className="flex flex-row justify-between align-center">
						<div className="font-bold">YOUR ACCOUNT</div>
						<button className="active-btn p-1 px-5 rounded-md">
							ACTIVE
						</button>
					</div>
					<div className="mt-4">
						<div className="text-2xs">ACCOUNT BALANCE</div>
						<div className="font-bold text-xl flex flex-row">
							N 450,000 <FaEyeSlash className="ml-3 mt-1" />
						</div>
					</div>
					<div>
						<p className="text-2xs">
							Sahara Pay Account Number: <b>3067423423</b>
						</p>
					</div>
				</div>
				<div className="flex flex-row justify-around my-5 ">
					<div className="flex flex-col text-center">
						<button
							style={{ backgroundColor: "var(--primary)" }}
							className="p-7 rounded-full text-white mb-1"
						>
							<FaPlus />
						</button>
						Fund Account
					</div>
					<div className="flex flex-col text-center">
						<button
							style={{ backgroundColor: "var(--primary)" }}
							className="p-7 rounded-full text-white mb-1"
						>
							<FaWallet />
						</button>
						Send Money
					</div>
				</div>
			</div>
			<div className="card-2 shadow-lg flex flex-row my-5 py-7 px-5">
				<div>
					<img src={userShield} alt="user-shield" />
				</div>
				<div className="ml-3">
					<div
						style={{ color: "var(--primary)" }}
						className="text-black"
					>
						<b>Upgrade your Sahara Pay Account</b>
					</div>
					<p>
						Verify your identity to improve limits on your account
					</p>
					<div className="mt-5 flex flex-row justify-end text-end">
						<button
							className="bg-white"
							style={{ color: "var(--danger)" }}
						>
							Upgrade Now
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
