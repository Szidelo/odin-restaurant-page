import "../styles/about/about.css";
import { createPageBanner } from "../components/pageBanner.js";
import { createElementWithClass, handleDelay } from "../utils/helpers.js";
import image1 from "../assets/about/image-1.jpg";
import image2 from "../assets/about/image-2.jpeg";
import image3 from "../assets/about/image-3.jpg";
import image4 from "../assets/about/image-4.jpg";

const TEXT_CONTENT = {
	TEXT_1: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.",
	TEXT_2: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet",
};

const renderAbout = () => {
	const content = document.querySelector("#content");
	content.innerHTML = "";

	content.appendChild(createPageBanner("About Us"));

	const aboutPage = createElementWithClass("div", "page-about");
	const restaurantSection = createRestaurantSection();

	aboutPage.appendChild(restaurantSection);

	content.appendChild(aboutPage);
};

const createRestaurantSection = () => {
	const restaurantSection = createElementWithClass("div", "page-restaurant");
	const imageDiv = createImageSection();
	restaurantSection.appendChild(imageDiv);
	const contentDiv = createRestaurantContent();
	restaurantSection.appendChild(contentDiv);
	return restaurantSection;
};

const createImageSection = () => {
	const imageDiv = createElementWithClass("div", "restaurant-images");
	let delay = handleDelay();
	[image1, image2, image3, image4].forEach((image) => {
		const img = document.createElement("img");
		img.src = image;
		img.setAttribute("loading", "lazy");
		img.classList.add("fade-in");
		img.style.animationDelay = `${delay.getDelay()}s`;
		delay.setDelay(0.15);
		imageDiv.appendChild(img);
	});

	return imageDiv;
};

const createTextSection = () => {
	const delay = handleDelay();
	delay.setDelay(0.15);

	const textDiv = createElementWithClass("div", "restaurant-text");

	const titleDiv = createElementWithClass("div", "title-div");
	titleDiv.classList.add("fade-in");

	titleDiv.style.animationDelay = `${delay.getDelay()}s`;
	delay.setDelay(0.15);

	const sectionTitle = createElementWithClass("h4", "section-title");
	sectionTitle.classList.add("section-title-about");
	sectionTitle.classList.add("fade-in");
	sectionTitle.style.animationDelay = `${delay.getDelay()}s`;
	delay.setDelay(0.15);
	sectionTitle.textContent = "About Us";

	const heading = document.createElement("h2");
	heading.textContent = "Welcome to Odin Restaurant";
	heading.classList.add("fade-in");
	heading.style.animationDelay = `${delay.getDelay()}s`;
	delay.setDelay(0.15);

	const text1 = document.createElement("p");
	const text2 = document.createElement("p");

	text1.textContent = TEXT_CONTENT.TEXT_1;
	text2.textContent = TEXT_CONTENT.TEXT_2;

	text1.classList.add("fade-in");
	text1.style.animationDelay = `${delay.getDelay()}s`;
	delay.setDelay(0.15);

	text2.classList.add("fade-in");
	text2.style.animationDelay = `${delay.getDelay()}s`;
	delay.setDelay(0.15);

	titleDiv.appendChild(sectionTitle);
	titleDiv.appendChild(heading);
	titleDiv.appendChild(text1);
	titleDiv.appendChild(text2);

	textDiv.appendChild(titleDiv);

	return textDiv;
};

const createCtaSection = () => {
	const ctaDiv = createElementWithClass("div", "cta-div");

	const experienceDiv = createElementWithClass("div", "exp-div");

	ctaDiv.appendChild(experienceDiv);
	return ctaDiv;
};

const createRestaurantContent = () => {
	const restaurantContent = createElementWithClass("div", "restaurant-content");

	restaurantContent.appendChild(createTextSection());
	restaurantContent.appendChild(createCtaSection());

	return restaurantContent;
};

export { renderAbout };
