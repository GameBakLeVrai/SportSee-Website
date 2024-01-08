import { useEffect, useState } from "react";
import { getUser } from "../api";

import StatsCard from "./StatsCard";

import Fire from "../images/icons/fire.png";
import Chicken from "../images/icons/chicken.png";
import Apple from "../images/icons/apple.png";
import Burger from "../images/icons/cheeseburger.png";

const StatsBar = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		if (data.length === 0) {
			(async () => {
				const res = await getUser(12);
				setData(res.keyData);
				console.log("StatsBar :", res.keyData);
			})();
		}
	});

	const returnData = (index) => {
		if(index === 0) return { image: Fire, text: "Calories" };
		if(index === 1) return { image: Chicken, text: "Proteines" };
		if(index === 2) return { image: Apple, text: "Glucides" };
		if(index === 3) return { image: Burger, text: "Lipides" };
	}

	if(data.length === 0) return <div></div>;

	return (
		<div className="statsbar__container">
			{Object.values(data).map((value, index) => {
				return <StatsCard key={value} image={ returnData(index).image} value={(index === 0) ? `${value}kCal` : `${value}g` } subtext={returnData(index).text} index={index} />
			})}
		</div>
	);
};

export default StatsBar;