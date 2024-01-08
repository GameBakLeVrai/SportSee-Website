import { useEffect, useState } from "react";
import { getPerformance } from "../../api";

import {
	Radar,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis,
} from "recharts";

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