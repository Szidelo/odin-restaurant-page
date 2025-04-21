import { createPageBanner } from "../utils/helpers";
import { createElementWithClass } from "../utils/helpers.js";

const renderContact = () => {
	const content = document.querySelector("#content");
	content.innerHTML = "";

	content.appendChild(createPageBanner("Contact Us"));
};

export { renderContact };
