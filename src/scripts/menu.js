import "../styles/menu/menu.css";
import coffeeIcon from "../assets/icons/coffee.svg";
import burgerIcon from "../assets/icons/hamburger.svg";
import silverwareIcon from "../assets/icons/silverware-fork-knife.svg";
import createListByCategory from "../components/categoryList.js";
import { FOOD } from "../utils/food";
import { createPageBanner } from "../utils/helpers.js";

const items = [
	{ label: "Popular", category: "Breakfast", icon: coffeeIcon },
	{ label: "Special", category: "Launch", icon: burgerIcon },
	{ label: "Lovely", category: "Dinner", icon: silverwareIcon },
];

const renderMenu = () => {
	const content = document.querySelector("#content");
	content.innerHTML = "";

	content.appendChild(createPageBanner("Food Menu"));

	const pageMenu = document.createElement("div");
	pageMenu.classList.add("page-menu", "fade-in");

	pageMenu.appendChild(createMenuHeader());
	pageMenu.appendChild(createMenuContent());

	content.appendChild(pageMenu);
};

const createMenuHeader = () => {
	const header = document.createElement("div");
	header.classList.add("menu-header");

	const sectionTitle = document.createElement("h4");
	sectionTitle.classList.add("section-title");
	sectionTitle.textContent = "Food Menu";

	const heading = document.createElement("h2");
	heading.textContent = "Most Popular Items";

	header.appendChild(sectionTitle);
	header.appendChild(heading);
	return header;
};

const createMenuContent = () => {
	const content = document.createElement("div");
	content.classList.add("menu-content");

	const ul = document.createElement("ul");

	items.forEach((item, index) => {
		const li = createMenuItem(item);
		if (index === 0) li.classList.add("active");
		ul.appendChild(li);
	});

	const listContainer = document.createElement("div");
	listContainer.classList.add("menu-list");
	const initialList = createListByCategory(items[0].category, FOOD);

	listContainer.appendChild(initialList);

	content.appendChild(ul);
	content.appendChild(listContainer);

	return content;
};

const createMenuItem = (item) => {
	const li = document.createElement("li");

	const iconDiv = document.createElement("div");
	iconDiv.classList.add("icon-div");
	fetchAndInlineSVG(item.icon, iconDiv);

	const textDiv = document.createElement("div");
	textDiv.innerHTML = `<h5>${item.label}</h5><h3>${item.category}</h3>`;

	li.appendChild(iconDiv);
	li.appendChild(textDiv);

	li.addEventListener("click", handleItemClick);
	return li;
};

const handleItemClick = (e) => {
	const allItems = document.querySelectorAll(".menu-content li");
	allItems.forEach((item) => item.classList.remove("active"));
	e.currentTarget.classList.add("active");

	const category = e.currentTarget.querySelector("h3").textContent;
	const menuList = document.querySelector(".menu-list");
	menuList.innerHTML = "";

	const newList = createListByCategory(category, FOOD);
	newList.classList.add("fade-in-delayed");
	menuList.appendChild(newList);
};

const fetchAndInlineSVG = async (url, target) => {
	try {
		const res = await fetch(url);
		const svgText = await res.text();
		target.innerHTML = svgText;
	} catch (err) {
		console.error("error fetching svg:", err);
		return null;
	}
};

export { renderMenu };
