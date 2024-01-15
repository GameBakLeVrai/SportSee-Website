import { Link } from "react-router-dom";
import { useState } from "react";

const Home = () => {
	const [id, setId] = useState(12);

	return (
		<div className="home">
			<h1>SportSee Project</h1>

			<div className="home__container">
				<label htmlFor="idprofil">Enter the id of the profile you want to see : </label>
				<input type="number" name="idprofil" placeholder="12" onChange={(e) => setId(e.target.value)} />
				<Link to={`/profil/${id}`}>Go to profil of : {id}</Link>
			</div>
		</div>
	);
};

export default Home;