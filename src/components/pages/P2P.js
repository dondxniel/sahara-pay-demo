import { useState } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { FaChevronDown, FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import P2PBodyBuyItem from "../presentational/P2PBodyBuyItem";
import P2PBodySellItem from "../presentational/P2PBodySellItem";

function P2P() {
	const [activeSubHeaderTab, setActiveSubHeaderTab] = useState("buy");
	const [activeBodyHeaderTab, setActiveBodyHeaderTab] = useState("usdt");
	return (
		<div
			style={{ backgroundColor: "var(--primary)" }}
			className="flex-1 text-white pt-5 flex flex-col"
		>
			{/* Header */}
			<div className="flex mx-5 flex-row ">
				<div className="mt-1">
					<Link to="/home">
						<FaChevronLeft />
					</Link>
				</div>
				<div className="mx-auto">Peer-to-Peer</div>
			</div>
			{/* Sub Header */}
			<div className="flex mx-5 flex-row justify-between mt-7 text-2xs">
				<div className="flex flex-row align-end">
					<div
						className={`mr-5 font-bold cursor-pointer ${
							activeSubHeaderTab === "buy" && "scale-150"
						}`}
						onClick={() => setActiveSubHeaderTab("buy")}
					>
						Buy
					</div>
					<div
						className={`mr-5 font-bold cursor-pointer ${
							activeSubHeaderTab === "sell" && "scale-150"
						}`}
						onClick={() => setActiveSubHeaderTab("sell")}
					>
						Sell
					</div>
				</div>
				<div className="flex flex-row align-center">
					<div className="flex flex-row group cursor-pointer">
						NGN&nbsp;&nbsp;
						<FaChevronDown className="group-hover:mt-1" />
					</div>
					<div className="ml-2">
						<BiDotsHorizontalRounded size={20} />
					</div>
				</div>
			</div>
			{/* Buy Body */}
			<div className="rounded-t-3xl px-7 py-2 bg-white text-black mt-5 flex-1">
				{/* Body Header */}
				<div className="flex flex-row">
					<div
						className={`flex flex-row items-center mr-2 cursor-pointer
                            ${
								activeBodyHeaderTab === "usdt"
									? "border border-0 border-b-4 p-2 border-blue-500"
									: "text-slate-300"
							}
						`}
						onClick={() => setActiveBodyHeaderTab("usdt")}
					>
						USDT
					</div>
					<div
						className={`flex flex-row items-center mr-2 cursor-pointer
                        ${
							activeBodyHeaderTab === "btc"
								? "border border-0 border-b-4 p-2 border-blue-500"
								: "text-slate-300"
						}
                    `}
						onClick={() => setActiveBodyHeaderTab("btc")}
					>
						BTC
					</div>
					<div
						className={`flex flex-row items-center mr-2 cursor-pointer
                        ${
							activeBodyHeaderTab === "eth"
								? "border border-0 border-b-4 p-2 border-blue-500"
								: "text-slate-300"
						}
                    `}
						onClick={() => setActiveBodyHeaderTab("eth")}
					>
						ETH
					</div>
					<div
						className={`flex flex-row items-center mr-2 cursor-pointer
                        ${
							activeBodyHeaderTab === "doge"
								? "border border-0 border-b-4 p-2 border-blue-500"
								: "text-slate-300"
						}
                    `}
						onClick={() => setActiveBodyHeaderTab("doge")}
					>
						DOGE
					</div>
				</div>
				{/* Buy Body Content */}
				{activeSubHeaderTab === "buy" && (
					<div>
						<P2PBodyBuyItem />
						<P2PBodyBuyItem />
						<P2PBodyBuyItem />
						<P2PBodyBuyItem />
						<P2PBodyBuyItem />
					</div>
				)}
				{activeSubHeaderTab === "sell" && (
					<div>
						<P2PBodySellItem />
						<P2PBodySellItem />
						<P2PBodySellItem />
						<P2PBodySellItem />
						<P2PBodySellItem />
					</div>
				)}
			</div>
		</div>
	);
}

export default P2P;
