import fallback from "../assets/food/fallback.png";

const foodImages = require.context("../assets/food", false, /\.(png|jpe?g|svg)$/); // webpack will bundle all images in this directory

export const getImage = (name) => {
	try {
		return foodImages(`./${name}.jpg`);
	} catch (error) {
		console.error(`Error loading image: ${name}`, error);
		return fallback;
	}
};

export const createElementWithClass = (tag, className) => {
	const el = document.createElement(tag);
	el.classList.add(className);
	return el;
};

export const handleDelay = () => {
	let delay = 0;
	const setDelay = (value) => {
		delay += value;
	};

	const getDelay = () => delay;

	return { setDelay, getDelay };
};

export const applyFadeIn = (element, delayHandler, delayTime, fadeType) => {
	const fadeClass = fadeType ? fadeType : "fade-in";
	element.classList.add(fadeClass);
	element.style.animationDelay = `${delayHandler.getDelay()}s`;
	delayHandler.setDelay(delayTime ? delayTime : 0.15);
};
