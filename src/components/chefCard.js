import { fetchAndInlineSVG, createElementWithClass, handleDelay } from "../utils/helpers";
import facebookIcon from "../assets/icons/facebook.svg";
import instagramIcon from "../assets/icons/instagram.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";

export const createChefCard = (data) => {
	const card = createElementWithClass("div", "chef-card");

	const imgDiv = createElementWithClass("div", "chef-image-div");

	const img = createElementWithClass("img", "chef-image");
	img.src = data.image;
	img.alt = data.name;

	imgDiv.appendChild(img);

	card.appendChild(imgDiv);

	const info = createElementWithClass("div", "chef-info");

	const name = createElementWithClass("h3", "chef-name");
	name.textContent = data.name;

	const designation = createElementWithClass("p", "chef-designation");
	designation.textContent = data.designation;

	info.appendChild(name);
	info.appendChild(designation);
	card.appendChild(info);

	const socials = createElementWithClass("div", "chef-socials");

	const createIconLink = (url, icon) => {
		const link = document.createElement("a");
		link.href = url;
		link.target = "_blank";
		fetchAndInlineSVG(icon, link);
		return link;
	};

	socials.appendChild(createIconLink(data.socials.facebook, facebookIcon));
	socials.appendChild(createIconLink(data.socials.instagram, instagramIcon));
	socials.appendChild(createIconLink(data.socials.linkedin, linkedinIcon));

	card.appendChild(socials);

	return card;
};
