import NavbarTop from "./components/Layouts/NavbarTop";
import NavbarVertical from "./components/Layouts/NavbarVertical";
import Home from "./pages/Home";

function App() {
	return (
		<div className="App">
			<NavbarTop />
			<Home />
			<NavbarVertical />
		</div>
	);
}

export default App;