import "../styles/home/home.css";
import image from "../assets/images/dish-1.PNG";

const renderHome = () => {
	const content = document.querySelector("#content");

	const pageHome = document.createElement("div");
	pageHome.classList.add("page-home");

	const container = document.createElement("div");
	container.classList.add("container");

	const contentDiv = document.createElement("div");
	contentDiv.classList.add("page-home__content");

	const heading = document.createElement("h1");
	heading.innerHTML = `Enjoy Our <br /> Delicious Meal`;

	const paragraph = document.createElement("p");
	paragraph.textContent =
		"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus eaque, asperiores cupiditate, esse ex tempora laborum iste illum quaerat alias atque quis, ipsam quasi ad dolorem consectetur porro deleniti a suscipit ea in eos odio.";

	const button = document.createElement("button");
	button.classList.add("btn");
	button.textContent = "our menu";

	button.addEventListener("click", () => {
		// go to menu page
	});

	contentDiv.appendChild(heading);
	contentDiv.appendChild(paragraph);
	contentDiv.appendChild(button);

	const imageDiv = document.createElement("div");
	imageDiv.classList.add("page-home__image");

	const img = document.createElement("img");
	img.setAttribute("loading", "lazy");
	img.src = image;
	img.alt = "Restaurant image";

	imageDiv.appendChild(img);

	container.appendChild(contentDiv);
	container.appendChild(imageDiv);
	pageHome.appendChild(container);

	content.innerHTML = "";

	content.appendChild(pageHome);
};

export { renderHome };
