import "../styles/menu/menu.css";
import coffeeIcon from "../assets/icons/coffee.svg";
import burgerIcon from "../assets/icons/hamburger.svg";
import silverwareIcon from "../assets/icons/silverware-fork-knife.svg";

import { FOOD, FOOD_CATEGORIES } from "../utils/food";

const renderMenu = () => {
	const content = document.querySelector("#content");
	console.log(FOOD);
	content.innerHTML = "";

	const pageBanner = document.createElement("div");
	pageBanner.classList.add("page-banner");
	const bannerTitle = document.createElement("h1");
	bannerTitle.textContent = "Food Menu";
	pageBanner.appendChild(bannerTitle);

	const pageMenu = document.createElement("div");
	pageMenu.classList.add("page-menu", "fade-in");

	const menuHeader = document.createElement("div");
	menuHeader.classList.add("menu-header");

	const sectionTitle = document.createElement("h4");
	sectionTitle.classList.add("section-title");
	sectionTitle.textContent = "Food Menu";

	const sectionHeading = document.createElement("h2");
	sectionHeading.textContent = "Most Popular Items";

	menuHeader.appendChild(sectionTitle);
	menuHeader.appendChild(sectionHeading);

	const menuContent = document.createElement("div");
	menuContent.classList.add("menu-content");

	const ul = document.createElement("ul");

	const items = [
		{ label: "Popular", category: "Breakfast", icon: coffeeIcon },
		{ label: "Special", category: "Launch", icon: burgerIcon },
		{ label: "Lovely", category: "Dinner", icon: silverwareIcon },
	];

	items.forEach((item) => {
		const li = document.createElement("li");

		const iconDiv = document.createElement("div");
		iconDiv.classList.add("icon-div");

		// fetch and inject svg
		fetchAndInlineSVG(item.icon, iconDiv);

		const textDiv = document.createElement("div");
		const label = document.createElement("h5");
		label.textContent = item.label;
		const category = document.createElement("h3");
		category.textContent = item.category;

		textDiv.appendChild(label);
		textDiv.appendChild(category);
		li.appendChild(iconDiv);
		li.appendChild(textDiv);
		ul.appendChild(li);

		li.addEventListener("click", handleItemClick);
	});

	const menuList = document.createElement("div");
	menuList.classList.add("menu-list");

	menuContent.appendChild(ul);
	menuContent.appendChild(menuList);

	pageMenu.appendChild(menuHeader);
	pageMenu.appendChild(menuContent);

	content.appendChild(pageBanner);
	content.appendChild(pageMenu);
};

// fetch svg and inline it
const fetchAndInlineSVG = async (url, target) => {
	const res = await fetch(url);
	const svgText = await res.text();
	target.innerHTML = svgText;
};

const handleItemClick = (e) => {
	const items = document.querySelectorAll(".menu-content li");
	items.forEach((item) => {
		item.classList.remove("active");
	});
	e.currentTarget.classList.add("active");
};

export { renderMenu };
