const createFoodCard = (foodItem) => {
	const { id, name, price, image, description, category } = foodItem;

	const card = document.createElement("div");
	card.classList.add("food-card", "fade-in-delayed");

	card.setAttribute("data-category", category);
	card.setAttribute("data-id", id);

	const imageDiv = document.createElement("div");
	imageDiv.classList.add("food-image");

	const img = document.createElement("img");
	img.src = image;
	img.alt = name;
	img.setAttribute("loading", "lazy");
	imageDiv.appendChild(img);
	card.appendChild(imageDiv);

	const contentDiv = document.createElement("div");
	contentDiv.classList.add("food-content");

	const titleAndPrice = document.createElement("div");
	titleAndPrice.classList.add("title-and-price");
	const title = document.createElement("h3");
	title.textContent = name;
	const priceTag = document.createElement("p");
	priceTag.classList.add("price-tag");
	priceTag.textContent = `$${price.toFixed(2)}`;

	titleAndPrice.appendChild(title);
	titleAndPrice.appendChild(priceTag);
	contentDiv.appendChild(titleAndPrice);

	const descriptionText = document.createElement("p");
	descriptionText.classList.add("description");
	descriptionText.textContent = description;

	contentDiv.appendChild(descriptionText);
	card.appendChild(contentDiv);

	return card;
};

export default createFoodCard;
