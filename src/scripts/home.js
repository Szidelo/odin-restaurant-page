import "../styles/home/home.css";
import image from "../assets/images/dish-1.PNG";
import { renderMenu } from "./menu";

const renderHome = () => {
	const content = document.querySelector("#content");
	content.innerHTML = "";

	const pageHome = createElementWithClass("div", "page-home");
	const container = createElementWithClass("div", "container");

	const contentSection = createHomeContentSection();
	const imageSection = createImageSection();

	container.appendChild(contentSection);
	container.appendChild(imageSection);
	pageHome.appendChild(container);
	content.appendChild(pageHome);
};

const createHomeContentSection = () => {
	const section = createElementWithClass("div", "page-home__content");

	section.classList.add("fade-in-from-left");

	const heading = document.createElement("h1");
	heading.innerHTML = `Enjoy Our <br /> Delicious Meal`;

	const paragraph = document.createElement("p");
	paragraph.textContent =
		"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus eaque, asperiores cupiditate, esse ex tempora laborum iste illum quaerat alias atque quis, ipsam quasi ad dolorem consectetur porro deleniti a suscipit ea in eos odio.";

	const button = document.createElement("button");
	button.classList.add("btn", "fade-in-from-left-delayed");
	button.textContent = "our menu";
	button.addEventListener("click", handleMenuButtonClick);

	section.appendChild(heading);
	section.appendChild(paragraph);
	section.appendChild(button);

	return section;
};

const createImageSection = () => {
	const imageDiv = createElementWithClass("div", "page-home__image");

	const img = document.createElement("img");
	img.src = image;
	img.alt = "Restaurant image";
	img.loading = "lazy";
	img.classList.add("fade-in-opacity");

	imageDiv.appendChild(img);
	return imageDiv;
};

const handleMenuButtonClick = () => {
	const buttons = document.querySelectorAll("header button");
	buttons.forEach((btn) => {
		btn.classList.remove("active");
		if (btn.textContent.trim().toLowerCase() === "menu") {
			btn.classList.add("active");
		}
	});

	const content = document.querySelector("#content");
	content.innerHTML = "";
	renderMenu();
};

const createElementWithClass = (tag, className) => {
	const el = document.createElement(tag);
	el.classList.add(className);
	return el;
};

export { renderHome };
