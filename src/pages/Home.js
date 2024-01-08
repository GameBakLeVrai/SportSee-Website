import { useEffect, useState } from "react";

import { getUser } from "../api";
import ChartBar from "../components/Charts/ChartBar";
import ChartRadar from "../components/Charts/ChartRadar";
import ChartRadial from "../components/Charts/ChartRadial";

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
			<main>
				<div className="home__content">
					<div className="home__header-text">
						<h1>Bonjour <span>{data.userInfos.firstName}</span></h1>
						<p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
					</div>

					<div className="home__charts-container">
						<ChartBar />

						<div className="home__charts-sub_container">
							<ChartRadar />
							<ChartRadial />
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Home;