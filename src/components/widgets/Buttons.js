import { Link } from "react-router-dom";

export function BlockPrimaryBtn({ btnAction, btnText, link }) {
	if (link)
		return (
			<div className="btn-container">
				<Link to={link} className="btn" onClick={btnAction}>
					{btnText}
				</Link>
			</div>
		);
	return (
		<div className="btn-container">
			<button className="btn" onClick={btnAction}>
				{btnText}
			</button>
		</div>
	);
}
