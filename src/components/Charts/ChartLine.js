import { useEffect, useState } from "react";
import { getSessions } from "../../api";

import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip
} from "recharts";

function CustomTooltip({ active, payload }) {
	if (active && payload) return (
		<div className="custom-tooltip__chartline">
			<p>{payload[0].value} min</p>
		</div>
	);
}

const ChartLine = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		if (data.length === 0) {
			(async () => {
				const res = await getSessions(12, true);
				setData(res.sessions);
				console.log("ChartLine :", res.sessions);
			})();
		}
	});

	return (
		<>
			<div className="linechart">
				<p className="linechart-title">Durée moyenne des <br/>sessions</p>

				<LineChart
					width={305}
					height={263}
					data={data}
					className="linechart__container"
				>
					<XAxis dataKey='day' tick={{ fill: 'white', fontSize: '15px', fontWeight: '500', opacity: 0.65 }} axisLine={false} tickLine={false} />
					<YAxis dataKey='sessionLength' domain={['dataMin - 20', 'dataMax + 5']} hide={true} />

					<Tooltip content={<CustomTooltip />} />

					<Line type='natural' dataKey='sessionLength' stroke='white' strokeWidth={3} dot={false} />
				</LineChart>
			</div>

			
		</>
	);
};

export default ChartLine;