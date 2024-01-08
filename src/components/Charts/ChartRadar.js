import { useEffect, useState } from "react";
import { getPerformance } from "../../api";

import {
	Radar,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis,
} from "recharts";

const d = [
	{
		subject: "Intensité",
		A: 120,
		B: 110,
		fullMark: 150,
	},
	{
		subject: "Vitesse",
		A: 98,
		B: 130,
		fullMark: 150,
	},
	{
		subject: "Force",
		A: 86,
		B: 130,
		fullMark: 150,
	},
	{
		subject: "Endurance",
		A: 99,
		B: 100,
		fullMark: 150,
	},
	{
		subject: "Energie",
		A: 85,
		B: 90,
		fullMark: 150,
	},
	{
		subject: "Cardio",
		A: 65,
		B: 85,
		fullMark: 150,
	},
]

const ChartRadar = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		if (data.length === 0) {
			(async () => {
				const res = await getPerformance(12);
				setData(res.data);
				console.log("Performance :", res.data);
			})();
		}
	});

	return (
		<RadarChart
			width={305}
			height={263}
			cx="50%"
			cy="50%"
			outerRadius="80%"
			data={data}
			className="radarChart"
		>
			<PolarGrid />

			<PolarAngleAxis dataKey="kind" tick={{ fill:"#ffffff", fontSize: "12" }} />
			<PolarRadiusAxis axisLine={false} tick={false} />

			<Radar name="Mike" dataKey="value" fill="#FF0101" fillOpacity={0.7} />
		</RadarChart>
	);
};

export default ChartRadar;
