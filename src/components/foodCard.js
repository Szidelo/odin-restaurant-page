import { createElementWithClass } from "../utils/helpers";
import { createFoodModal } from "./foodItemModal";

const createFoodCard = (foodItem) => {
	const { id, name, price, image, description, category } = foodItem;

	const card = document.createElement("div");
	card.classList.add("food-card", "fade-in-delayed");

	card.setAttribute("data-category", category);
	card.setAttribute("data-id", id);

	const imageSection = createCardImage(image, name);
	card.appendChild(imageSection);

	const contentSection = createContentSection(name, price, description);
	card.appendChild(contentSection);

	card.addEventListener("click", () => {
		handleModal(foodItem);
	});

	return card;
};

const createCardImage = (image, name) => {
	const imageDiv = createElementWithClass("div", "food-image");
	const img = document.createElement("img");
	img.src = image;
	img.alt = name;
	img.setAttribute("loading", "lazy");
	imageDiv.appendChild(img);

	return imageDiv;
};

const createContentSection = (name, price, description) => {
	const contentDiv = createElementWithClass("div", "food-content");
	const titleAndPrice = createElementWithClass("div", "title-and-price");

	const title = document.createElement("h3");
	title.textContent = name;

	const priceTag = createElementWithClass("p", "price-tag");
	priceTag.textContent = `$${price.toFixed(2)}`;

	const descriptionText = createElementWithClass("p", "description");
	descriptionText.textContent = description;

	titleAndPrice.appendChild(title);
	titleAndPrice.appendChild(priceTag);
	contentDiv.appendChild(titleAndPrice);

	contentDiv.appendChild(descriptionText);

	return contentDiv;
};

const handleModal = (foodItem) => {
	const modal = createFoodModal(foodItem);
	const div = document.querySelector("#content");
	div.append(modal);
	modal.showModal();
};

export default createFoodCard;
