import { useEffect, useState } from "react";

import { getUser } from "../api";

import NavbarTop from "../components/Layouts/NavbarTop";
import NavbarVertical from "../components/Layouts/NavbarVertical";

const Home = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		if(!data) {
			(async () => {
				const res = await getUser(12);
				setData(res);
			})();
		}
	})

	if(!data) return <div>Loading ...</div>;

	return (
		<div className="home">
			<NavbarTop />

			<main>
				<NavbarVertical />

				<div className="home__content">
					<div className="home__header-text">
						<h1>Bonjour <span>{data.userInfos.firstName}</span></h1>
						<p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
					</div>

					
				</div>
			</main>
		</div>
	);
};

export default Home;