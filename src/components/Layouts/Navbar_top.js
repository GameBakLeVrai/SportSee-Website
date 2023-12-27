import Logo from "../../images/logo.png";

const Navbar_top = () => {
	return (
		<div className="navbar__top">
			<img src={Logo} alt="logo" />
			
			<a href="/accueil">Accueil</a>
			<a href="/profil">Profil</a>
			<a href="/regagles">Réglages</a>
			<a href="/communaute">Communauté</a>
		</div>
	);
};

export default Navbar_top;