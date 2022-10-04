import React from "react";
import notification from "../../assets/images/notification.svg";
import scan from "../../assets/images/scan.svg";
function Header() {
	return (
		<div className="header">
			<div>Hello, Amadi</div>
			<div>
				<img src={scan} alt="Scan" />
				<img src={notification} alt="notification" />
			</div>
		</div>
	);
}

export default Header;
