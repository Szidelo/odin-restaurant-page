import "../styles/footer/footer.css";
import { NAV_ITEMS } from "../utils/constants";
import { createElementWithClass, fetchAndInlineSVG } from "../utils/helpers";
import { renderHome } from "./home";
import { renderAbout } from "./about";
import { renderMenu } from "./menu";
import { renderContact } from "./contact";
import markerSvg from "../assets/icons/map-marker.svg";
import phoneSvg from "../assets/icons/phone.svg";
import mailSvg from "../assets/icons/email.svg";
import facebookSvg from "../assets/icons/facebook.svg";
import youtubeSvg from "../assets/icons/youtube.svg";
import twitterSvg from "../assets/icons/twitter.svg";
import linkedinSvg from "../assets/icons/linkedin.svg";

const addressItems = [
	{
		icon: markerSvg,
		text: "123 Street, New York, USA",
	},
	{
		icon: phoneSvg,
		text: "+012 345 67890",
	},
	{
		icon: mailSvg,
		text: "nfo@example.com",
	},
];

const openingItems = [
	{
		days: "Monday - Saturday",
		hours: "09AM - 09PM",
	},
	{
		days: "Sunday",
		hours: "10AM - 08PM",
	},
];

const renderFooter = () => {
	const footer = document.createElement("footer");
	const menuDiv = createMenuDiv();
	const contactDiv = createContactDiv();
	const openingDiv = createOpeningDiv();
	const newsletterDiv = createNewsletterDiv();

	footer.appendChild(menuDiv);
	footer.appendChild(contactDiv);
	footer.appendChild(openingDiv);
	footer.appendChild(newsletterDiv);
	return footer;
};

const createMenuDiv = () => {
	const container = createElementWithClass("div", "footer-menu");

	const sectionTitle = createElementWithClass("h4", "section-title");
	sectionTitle.textContent = "Company";

	container.appendChild(sectionTitle);

	const ul = createElementWithClass("ul", "footer-nav");

	Object.values(NAV_ITEMS).forEach((item) => {
		const li = createElementWithClass("li", "footer-link");
		const btn = document.createElement("button");
		btn.textContent = item;

		li.appendChild(btn);

		ul.appendChild(li);
		btn.addEventListener("click", changeActive);
	});

	container.appendChild(ul);

	return container;
};

const createContactDiv = () => {
	const container = createElementWithClass("div", "footer-contact");

	const sectionTitle = createElementWithClass("h4", "section-title");
	sectionTitle.textContent = "Contact";

	container.appendChild(sectionTitle);

	const contentContainer = createElementWithClass("div", "contact-container");

	const addressDiv = createElementWithClass("div", "footer-address-div");

	addressItems.forEach(async (item) => {
		console.log(item);
		const div = createElementWithClass("div", "address-item");

		await fetchAndInlineSVG(item.icon, div);
		const para = createElementWithClass("p", "address-text");
		para.textContent = item.text;
		div.appendChild(para);
		console.log(div);
		addressDiv.appendChild(div);
	});

	const socials = createElementWithClass("div", "footer-socials");

	[facebookSvg, twitterSvg, youtubeSvg, linkedinSvg].forEach(async (img) => {
		const div = document.createElement("div");
		await fetchAndInlineSVG(img, div);
		socials.appendChild(div);
	});

	container.appendChild(contentContainer);
	container.appendChild(addressDiv);
	container.appendChild(socials);

	return container;
};

const createOpeningDiv = () => {
	const container = createElementWithClass("div", "footer-openeing");

	const sectionTitle = createElementWithClass("h4", "section-title");
	sectionTitle.textContent = "Opening";

	container.appendChild(sectionTitle);

	openingItems.forEach((item) => {
		const div = createElementWithClass("div", "opening-item");
		const days = document.createElement("h5");
		days.textContent = item.days;

		const hours = document.createElement("p");
		hours.textContent = item.hours;

		[days, hours].forEach((item) => div.appendChild(item));
		container.appendChild(div);
	});

	return container;
};

const createNewsletterDiv = () => {
	const container = createElementWithClass("div", "footer-newsletter");
	const sectionTitle = createElementWithClass("h4", "section-title");
	sectionTitle.textContent = "Newsletter";

	container.appendChild(sectionTitle);

	const para = document.createElement("p");
	para.textContent = "Dolor amet sit justo amet elitr clita ipsum elitr est.";

	const inputContainer = createElementWithClass("div", "input-container");

	const input = document.createElement("input");
	const submitBtn = createElementWithClass("button", "btn", "news-btn");
	submitBtn.textContent = "SUBMIT";

	inputContainer.appendChild(input);
	inputContainer.appendChild(submitBtn);

	container.appendChild(para);
	container.appendChild(inputContainer);

	return container;
};

// to be moved in helpers.js

const changeActive = (e) => {
	const buttons = document.querySelectorAll("header button");
	buttons.forEach((button) => {
		button.classList.remove("active");
	});

	e.target.classList.add("active");
	changePage(e);
};

const changePage = (e) => {
	const { HOME, ABOUT, MENU, CONTACT } = NAV_ITEMS;
	const page = e.target.textContent.trim().toLowerCase();
	const contentDiv = document.querySelector("#content");
	contentDiv.innerHTML = "";
	switch (page) {
		case HOME:
			renderHome();
			break;
		case ABOUT:
			renderAbout();
			break;
		case MENU:
			renderMenu();
			break;
		case CONTACT:
			renderContact();
			break;
	}
};

export { renderFooter };
