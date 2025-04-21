import { createPageBanner } from "../components/pageBanner.js";
import { createElementWithClass } from "../utils/helpers.js";

const renderAbout = () => {
	const content = document.querySelector("#content");
	content.innerHTML = "";

	content.appendChild(createPageBanner("About Us"));
};

export { renderAbout };
