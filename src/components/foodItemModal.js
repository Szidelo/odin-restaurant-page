import { createElementWithClass } from "../utils/helpers";

const createFoodModal = (foodItem) => {
	const dialog = createElementWithClass("dialog", "food-modal");

	const text = document.createElement("p");
	text.textContent = foodItem ? foodItem.name : "hello";

	dialog.appendChild(text);

	return dialog;
};

export { createFoodModal };
