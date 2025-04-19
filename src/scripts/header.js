import "../styles/header/header.css";

const renderHeader = () => {
	const items = ["Home", "About", "Menu", "Contact"];

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

		if (i === 0) {
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
};

export { renderHeader };
