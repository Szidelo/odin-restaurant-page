import { applyFadeIn, handleDelay } from "../utils/helpers.js";
import createFoodCard from "./foodCard.js";

const createListByCategory = (category, food) => {
	const grid = document.createElement("div");
	grid.innerHTML = "";
	grid.classList.add("category-grid");

	const delay = handleDelay();

	food.forEach((foodItem) => {
		if (foodItem.category === category) {
			const foodCard = createFoodCard(foodItem);
			applyFadeIn(foodCard, delay);
			grid.appendChild(foodCard);
		}
	});

	return grid;
};

export default createListByCategory;
