// libs
import React, { useRef } from "react";
import PropTypes from "prop-types";
// others
import "./style.scss";

const getRandomNumber = () => Math.trunc(Math.random() * 10);

const RandomNumber = ({ onRandomNumber = null }) => {
	const typingTimeoutRef = useRef(null);

	const handleRandomNumber = () => {
		if (!onRandomNumber) return;

		if (typingTimeoutRef.current) {
			clearTimeout(typingTimeoutRef.current);
		}
		typingTimeoutRef.current = setTimeout(() => {
			onRandomNumber(getRandomNumber());
		}, 400);
	};
	return (
		<div onClick={handleRandomNumber} className="btn">
			Random
		</div>
	);
};

RandomNumber.propTypes = {
	handleClickButton: PropTypes.func,
};

export default RandomNumber;
