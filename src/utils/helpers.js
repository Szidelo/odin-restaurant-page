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

export const createPageBanner = (title) => {
	const banner = document.createElement("div");
	banner.classList.add("page-banner");

	const heading = document.createElement("h1");
	heading.textContent = title;

	banner.appendChild(heading);
	return banner;
};
