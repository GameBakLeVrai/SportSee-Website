import Logo from "../../images/logo.png";

const Navbar_top = () => {
	return (
		<nav className="navbar__top">
			<img src={Logo} alt="logo" />

			<a href="/accueil">Accueil</a>
			<a href="/profil">Profil</a>
			<a href="/regagles">Réglages</a>
			<a href="/communaute">Communauté</a>
		</nav>
	);
};

export default Navbar_top;