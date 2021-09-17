// libs
import React from 'react';
import PropTypes from 'prop-types';

const ResultRandom = ({ numberList, result }) => {
	return (
		<>
			<div>
				<span className="title">Array random:</span> [
				{numberList.map((item) => `${item} ,`)}]
			</div>
			<div>
				<span className="title">Sum array:  </span>
				<span
					style={{ color: "#d0011b", fontWeight: "bold", fontSize: "24px" }}
				>
					{result}
				</span>
			</div>
		</>
	)
}

ResultRandom.propTypes = {
	numberList: PropTypes.array,
	result: PropTypes.number
};

export default ResultRandom
