import fallback from "../assets/food/fallback.png";

const imageContexts = {
	food: {
		context: require.context("../assets/food", false, /\.(png|jpe?g|svg)$/),
		ext: "jpg",
	},
	chef: {
		context: require.context("../assets/chefs", false, /\.(png|jpe?g|svg)$/),
		ext: "png",
	},
};

export const getImage = (name, type = "food") => {
	const config = imageContexts[type] || imageContexts.food;

	try {
		return config.context(`./${name}.${config.ext}`);
	} catch (error) {
		console.error(`Error loading image: ${name} [type: ${type}]`, error);
		return fallback;
	}
};

export const fetchAndInlineSVG = async (url, target) => {
	try {
		const res = await fetch(url);
		const svgText = await res.text();
		target.innerHTML = svgText;
	} catch (err) {
		console.error("error fetching svg:", err);
		return null;
	}
};

export const createElementWithClass = (element, ...classNames) => {
	const el = document.createElement(element);
	el.classList.add(...classNames);
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
