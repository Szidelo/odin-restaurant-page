import "../styles/about/about.css";
import { createPageBanner } from "../components/pageBanner.js";
import { applyFadeIn, createElementWithClass, handleDelay } from "../utils/helpers.js";
import image1 from "../assets/about/image-1.jpg";
import image2 from "../assets/about/image-2.jpeg";
import image3 from "../assets/about/image-3.jpg";
import image4 from "../assets/about/image-4.jpg";
import { renderMenu } from "./menu.js";

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
		applyFadeIn(img, delay);

		imageDiv.appendChild(img);
	});

	return imageDiv;
};

const createTextSection = () => {
	const delay = handleDelay();
	delay.setDelay(0.15);

	const textDiv = createElementWithClass("div", "restaurant-text");

	const titleDiv = createElementWithClass("div", "title-div");
	applyFadeIn(titleDiv, delay);

	const sectionTitle = createElementWithClass("h4", "section-title");
	sectionTitle.classList.add("section-title-about");
	sectionTitle.textContent = "About Us";
	applyFadeIn(sectionTitle, delay);

	const heading = document.createElement("h2");
	heading.textContent = "Welcome to Odin's Restaurant";
	applyFadeIn(heading, delay);

	const text1 = document.createElement("p");
	text1.textContent = TEXT_CONTENT.TEXT_1;
	applyFadeIn(text1, delay);

	const text2 = document.createElement("p");
	text2.textContent = TEXT_CONTENT.TEXT_2;
	applyFadeIn(text2, delay);

	[sectionTitle, heading, text1, text2].forEach((el) => {
		titleDiv.appendChild(el);
	});

	textDiv.appendChild(titleDiv);

	return textDiv;
};

const createCtaSection = () => {
	const ctaDiv = createElementWithClass("div", "cta-div");
	const delay = handleDelay();
	delay.setDelay(0.9);

	const infoDiv = createElementWithClass("div", "info-div");

	const experienceDiv = createExperienceDiv();
	applyFadeIn(experienceDiv, delay);
	infoDiv.appendChild(experienceDiv);

	const bestChefsDiv = createBestChefsDiv();
	applyFadeIn(bestChefsDiv, delay);
	infoDiv.appendChild(bestChefsDiv);

	const ctaButton = createCtaButton();
	applyFadeIn(ctaButton, delay);
	ctaDiv.appendChild(ctaButton);

	ctaDiv.appendChild(infoDiv);
	return ctaDiv;
};

const createExperienceDiv = () => {
	const experienceDiv = createElementWithClass("div", "experience-div");

	const number = document.createElement("h1");

	for (let i = 0; i <= 20; i++) {
		setTimeout(() => {
			number.textContent = i;
		}, i * 100);
	}

	const textDiv = createElementWithClass("div", "info");
	const p = document.createElement("p");
	p.textContent = "Years of";
	const h4 = document.createElement("h4");
	h4.textContent = "Experience";

	textDiv.appendChild(p);
	textDiv.appendChild(h4);

	experienceDiv.appendChild(number);
	experienceDiv.appendChild(textDiv);

	return experienceDiv;
};

const createBestChefsDiv = () => {
	const bestChefsDiv = createElementWithClass("div", "best-chefs-div");

	const number = document.createElement("h1");

	for (let i = 0; i <= 50; i++) {
		setTimeout(() => {
			number.textContent = i;
		}, i * 40);
	}

	const textDiv = createElementWithClass("div", "info");
	const p = document.createElement("p");
	p.textContent = "Popular";
	const h4 = document.createElement("h4");
	h4.textContent = "Master Chefs";

	textDiv.appendChild(p);
	textDiv.appendChild(h4);

	bestChefsDiv.appendChild(number);
	bestChefsDiv.appendChild(textDiv);

	return bestChefsDiv;
};

const createCtaButton = () => {
	const button = document.createElement("button");
	button.classList.add("btn");
	button.textContent = "our menu";
	button.addEventListener("click", () => {
		const buttons = document.querySelectorAll("header button");
		buttons.forEach((btn) => {
			btn.classList.remove("active");
			if (btn.textContent.trim().toLowerCase() === "menu") {
				btn.classList.add("active");
				renderMenu();
			}
		});
	});

	return button;
};

const createRestaurantContent = () => {
	const restaurantContent = createElementWithClass("div", "restaurant-content");

	restaurantContent.appendChild(createTextSection());
	restaurantContent.appendChild(createCtaSection());

	return restaurantContent;
};

export { renderAbout };
