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
