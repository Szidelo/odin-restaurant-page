import createFoodCard from "./foodCard.js";

const createListByCategory = (category, food) => {
	const grid = document.createElement("div");
	grid.innerHTML = "";
	grid.classList.add("category-grid");

	let delay = 0;

	food.forEach((foodItem) => {
		if (foodItem.category === category) {
			const foodCard = createFoodCard(foodItem);

			foodCard.classList.add("fade-in");
			foodCard.style.animationDelay = `${delay}s`;
			delay += 0.15; // adjust delay per card

			grid.appendChild(foodCard);
		}
	});

	return grid;
};

export default createListByCategory;
