import React from "react";

const StatsCard = ({ image, value, subtext, index }) => {
	return (
		<div className="stats__card">
			<img className={`statsimg__${index}`} src={image} alt={""} />

			<div className="stats__text-container">
				<p className="stats__text">{value}</p>
				<p className="stats__subtext">{subtext}</p>
			</div>
		</div>
	);
};

export default StatsCard;