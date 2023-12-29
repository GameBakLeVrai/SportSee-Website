import Meditation from "../../images/icons/meditation.png";
import Natation from "../../images/icons/swimming.png";
import Velo from "../../images/icons/bicycle.png";
import Haltere from "../../images/icons/dumbbell.png";

const NavbarVertical = () => {
	return (
		<nav className="navbar__vertical">
			<ul>
				<li>
					<img src={Meditation} alt="Meditation" />
				</li>

				<li>
					<img src={Natation} alt="Natation" />
				</li>

				<li>
					<img src={Velo} alt="Velo" />
				</li>

				<li>
					<img src={Haltere} alt="Haltere" />
				</li>
			</ul>

			<p>Copyright, SportSee 2020</p>
		</nav>
	);
};

export default NavbarVertical;