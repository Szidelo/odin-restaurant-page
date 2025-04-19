import "../styles/header/header.css";

import { renderHome } from "../scripts/home.js";
import { renderMenu } from "../scripts/menu.js";

const items = ["Home", "About", "Menu", "Contact"];
const renderHeader = () => {
	const header = document.createElement("header");
	const nav = document.createElement("nav");
	const ul = document.createElement("ul");
	const logoContainer = document.createElement("div");
	const logo = document.createElement("a");
	logoContainer.classList.add("logo-container");
	logo.textContent = "odin's restaurant";
	logo.href = "/";

	logoContainer.appendChild(logo);
	nav.appendChild(logoContainer);

	items.forEach((item, i) => {
		const li = document.createElement("li");
		const btn = document.createElement("button");
		btn.textContent = item;
		li.appendChild(btn);
		ul.appendChild(li);

		if (i === 2) {
			btn.classList.add("active");
		}

		btn.addEventListener("click", changeActive);
	});

	nav.appendChild(ul);

	header.appendChild(nav);

	document.querySelector("body").prepend(header);
};

const changeActive = (e) => {
	const buttons = document.querySelectorAll("header button");
	buttons.forEach((button) => {
		button.classList.remove("active");
	});

	e.target.classList.add("active");
	changePage(e);
};

const changePage = (e) => {
	const page = e.target.textContent.trim().toLowerCase();
	const contentDiv = document.querySelector("#content");
	contentDiv.innerHTML = "";
	console.log(page);
	switch (page) {
		case "home":
			renderHome();
			break;
		case "menu":
			renderMenu();
			break;
	}
};

export { renderHeader };
