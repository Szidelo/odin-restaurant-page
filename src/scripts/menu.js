import "../styles/menu/menu.css";
import coffeeIcon from "../assets/icons/coffee.svg";
import burgerIcon from "../assets/icons/hamburger.svg";
import silverwareIcon from "../assets/icons/silverware-fork-knife.svg";
import createListByCategory from "../components/categoryList.js";
import { FOOD } from "../utils/food";
import { createPageBanner } from "../components/pageBanner.js";
import { createElementWithClass, fetchAndInlineSVG } from "../utils/helpers.js";
import { renderFooter } from "./footer.js";

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

	const footer = renderFooter();

	content.appendChild(footer);
};

const createMenuHeader = () => {
	const header = createElementWithClass("div", "menu-header");
	const sectionTitle = createElementWithClass("h4", "section-title");
	sectionTitle.textContent = "Food Menu";

	const heading = document.createElement("h2");
	heading.textContent = "Most Popular Items";

	header.appendChild(sectionTitle);
	header.appendChild(heading);
	return header;
};

const createMenuContent = () => {
	const content = createElementWithClass("div", "menu-content");

	const ul = document.createElement("ul");

	items.forEach((item, index) => {
		const li = createMenuItem(item);
		if (index === 0) li.classList.add("active");
		ul.appendChild(li);
	});

	const listContainer = createElementWithClass("div", "menu-list");
	const initialList = createListByCategory(items[0].category, FOOD);

	listContainer.appendChild(initialList);

	content.appendChild(ul);
	content.appendChild(listContainer);

	return content;
};

const createMenuItem = (item) => {
	const li = document.createElement("li");
	const iconDiv = createElementWithClass("div", "icon-div");
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

export { renderMenu };
