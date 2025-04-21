import "../styles/about/about.css";
import { createPageBanner } from "../components/pageBanner.js";
import { createElementWithClass } from "../utils/helpers.js";
import image1 from "../assets/about/image-1.jpg";
import image2 from "../assets/about/image-2.jpeg";
import image3 from "../assets/about/image-3.jpg";
import image4 from "../assets/about/image-4.jpg";

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
	let delay = 0;
	[image1, image2, image3, image4].forEach((image) => {
		const img = document.createElement("img");
		img.src = image;
		img.setAttribute("loading", "lazy");
		img.classList.add("fade-in");
		img.style.animationDelay = `${delay}s`;
		delay += 0.15;
		imageDiv.appendChild(img);
	});

	return imageDiv;
};

const createRestaurantContent = () => {
	const restaurantContent = createElementWithClass("div", "restaurant-content");

	return restaurantContent;
};

export { renderAbout };
