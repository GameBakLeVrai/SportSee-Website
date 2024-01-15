import { Link } from "react-router-dom";

import Logo from "../../images/logo.png";

const NavbarTop = () => {
	return (
		<nav className="navbar__top">
			<img src={Logo} alt="logo" />

			<Link to="/accueil">Accueil</Link>
			<Link to="/profil">Profil</Link>
			<Link to="/reglages">Réglages</Link>
			<Link to="/communaute">Communauté</Link>
		</nav>
	);
};

export default NavbarTop;