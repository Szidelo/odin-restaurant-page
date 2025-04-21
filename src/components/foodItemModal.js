import { createElementWithClass } from "../utils/helpers";

const createFoodModal = (foodItem) => {
	const { image, name, description, price, category } = foodItem;
	const dialog = createElementWithClass("dialog", "food-modal");
	dialog.classList.add("fade-in-modal");
	dialog.innerHtml = "";

	const imageSection = createImageSection(image, name);
	dialog.appendChild(imageSection);

	const contentSection = createContentSection(name, description, price, category);
	dialog.appendChild(contentSection);

	const btn = createElementWithClass("button", "close-btn");
	btn.textContent = "x";

	dialog.appendChild(btn);

	btn.addEventListener("click", () => {
		dialog.style.scale = "0.5";
		dialog.style.opacity = "0";
		setTimeout(() => {
			dialog.close();
		}, 300);
	});

	return dialog;
};

const createImageSection = (image, name) => {
	const imageDiv = createElementWithClass("div", "food-modal-image-container");
	const img = document.createElement("img");
	img.src = image;
	img.alt = name;
	img.setAttribute("loading", "lazy");

	imageDiv.appendChild(img);

	return imageDiv;
};

const createContentSection = (name, description, price, category) => {
	const contentDiv = createElementWithClass("div", "food-modal-content");

	const upperSection = createElementWithClass("div", "food-modal-top");
	const title = document.createElement("h3");
	title.textContent = name;
	const priceTag = createElementWithClass("p", "price-tag");
	priceTag.textContent = `$${price.toFixed(2)}`;

	upperSection.appendChild(title);
	upperSection.appendChild(priceTag);

	const lowerSection = createElementWithClass("div", "food-modal-bottom");
	const descriptionText = document.createElement("p");
	descriptionText.textContent = description;
	const categoryText = document.createElement("h5");
	categoryText.textContent = category + " Dish";

	lowerSection.appendChild(descriptionText);
	lowerSection.appendChild(categoryText);

	contentDiv.appendChild(upperSection);
	contentDiv.appendChild(lowerSection);

	return contentDiv;
};

export { createFoodModal };
