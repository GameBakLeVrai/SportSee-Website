import { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';

import { getUser } from "../api";

import ChartBar from "../components/Charts/ChartBar";
import ChartRadar from "../components/Charts/ChartRadar";
import ChartRadial from "../components/Charts/ChartRadial";
import StatsBar from "../components/Stats/StatsBar";
import ChartLine from "../components/Charts/ChartLine";

const Home = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	
	const [data, setData] = useState(null);

	useEffect(() => {
		if(!data) {
			(async () => {
				getUser(id).then((res) => {
					setData(res);
				}).catch((err) => {
					if(err.response.status === 404) navigate("/");
				});
			})();
		}
	})

	if(!data) return <div>Loading ...</div>;

	return (
		<div className="profil">
			<main>
				<div className="profil__content">
					<div className="profil__header-text">
						<h1>Bonjour <span>{data.userInfos.firstName}</span></h1>
						<p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
					</div>

					<div className="profil__charts-stats_container">
						<div className="profil__charts-container">
							<ChartBar id={id} />

							<div className="profil__charts-sub_container">
								<ChartLine id={id} />
								<ChartRadar id={id} />
								<ChartRadial id={id} />
							</div>
						</div>

						<div className="profil__charts-stats">
							<StatsBar id={id} />
						</div>
					</div>					
				</div>
			</main>
		</div>
	);
};

export default Home;