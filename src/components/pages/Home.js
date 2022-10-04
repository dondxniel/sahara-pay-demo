import React from "react";
import bitcoin from "../../assets/images/bitcoin.svg";
import dollarsign from "../../assets/images/dollarsign.svg";
import receive from "../../assets/images/receive.svg";
import send from "../../assets/images/send.svg";
import swap from "../../assets/images/swap.svg";

import home from "../../assets/images/home.svg";
import p2p from "../../assets/images/p2p.svg";
import people from "../../assets/images/people.svg";
import setting from "../../assets/images/setting.svg";
import wallet from "../../assets/images/wallet.svg";

import { Link } from "react-router-dom";
import Card from "../presentational/Card";
import Header from "../widgets/Header";

function Home() {
	return (
		<div>
			<div>
				<Header />
			</div>
			<div className="mx-5">
				<div className="card-container">
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			<div className="mx-5 text-2xs">
				<div className="font-bold text-slate-600 text-lg">
					Quick Access
				</div>
				<div className="flex flex-row justify-around my-5">
					<div className="flex flex-col text-center">
						<img src={dollarsign} alt="Dollar sign" />
						Buy
					</div>
					<div className="flex flex-col text-center">
						<img src={swap} alt="swap" />
						Swap
					</div>
					<div className="flex flex-col text-center">
						<img
							src={receive}
							style={{ height: 45 }}
							alt="receive"
						/>
						Receive
					</div>
					<div className="flex flex-col text-center">
						<img src={send} alt="send" />
						Send
					</div>
				</div>
			</div>
			<div className="mx-5 text-2xs">
				<div className="font-bold text-slate-600 text-lg">
					Exchange Rates
				</div>
				<div className="flex flex-row my-5">
					<img src={bitcoin} alt="Bitcoin icon" />
					<div className="flex flex-col justify-center ml-3 flex-1">
						<div className="font-bold">Bitcoin</div>
						<div className="text-slate-500">BTC</div>
					</div>
					<div className="flex flex-col justify-center ">
						<div className="font-bold">$22,021</div>
						<div className="text-slate-500 ">0.94%</div>
					</div>
				</div>
			</div>
			{/* Tab bar */}
			<div className="absolute bottom-0 right-0 left-0 bg-white">
				<div className="relative flex flex-row justify-around w-100 py-3">
					<Link to="/p2p">
						<div>
							<img src={home} alt="Home" />
						</div>
					</Link>
					<Link to="/p2p">
						<div>
							<img src={people} alt="people" />
						</div>
					</Link>
					<Link to="/p2p">
						<div>
							<img src={p2p} alt="p2p" />
						</div>
					</Link>
					<Link to="/p2p">
						<div>
							<img src={wallet} alt="wallet" />
						</div>
					</Link>
					<Link to="/p2p">
						<div>
							<img src={setting} alt="setting" />
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Home;
