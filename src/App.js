import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreatePin from "./components/pages/CreatePin";
import Home from "./components/pages/Home";
import OnboardingSlider from "./components/pages/OnboardingSlider";
import P2P from "./components/pages/P2P";
import Signup from "./components/pages/Signup";
import VerifyPhoneNumber from "./components/pages/VerifyPhoneNumber";
import Welcome from "./components/pages/Welcome";

function App() {
	return (
		<div className="app-layout">
			<Router>
				<Routes>
					<Route path="/" element={<OnboardingSlider />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/create-pin" element={<CreatePin />} />
					<Route
						path="/verify-phone-number"
						element={<VerifyPhoneNumber />}
					/>
					<Route path="/welcome" element={<Welcome />} />
					{/* After auth */}
					<Route path="/home" element={<Home />} />
					<Route path="/p2p" element={<P2P />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
