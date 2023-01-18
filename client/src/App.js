import Navigation from "./components/Navigation";
import About from "./pages/About";
import Catalog from "./pages/Catalog";
import Landing from "./pages/Landing";
import Detail from "./pages/Detail";
import Kosik from "./pages/Kosik";
import Ucet from "./pages/Ucet";
import { Component, useEffect, useState } from "react";

import { Routes, Route } from "react-router-dom";

class App extends Component {
	render() {
		return (
			<div>
				<Navigation />
				<div className="core">
					<Routes>
						<Route path="/" element={<Landing />} />
						{/* <Route path="/Catalog" element=<Catalog /> /> */}
						<Route path="/Catalog">
							<Route index element={<Catalog />} />
							<Route path=":id" element={<Detail />} />
						</Route>
						<Route path="/About" element={<About />} />
						<Route path="/Detail" element={<Detail />} />
						<Route path="/Ucet" element={<Ucet />} />
						<Route path="/Kosik" element={<Kosik />} />
					</Routes>
				</div>
			</div>
		);
	}
}

export default App;
