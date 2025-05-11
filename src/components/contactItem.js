import { createElementWithClass, fetchAndInlineSVG } from "../utils/helpers";
import emailSvg from "../assets/icons/email.svg";

export const createContactItem = (item) => {
	const li = createElementWithClass("div", "contact-item");

	const label = createElementWithClass("h4", "section-title");
	label.textContent = item.LABEL;

	li.appendChild(label);

	const address = createElementWithClass("p", "contact-address");
	address.textContent = item.ADDRESS;

	const addressDiv = createElementWithClass("div", "address-div");
	const emailIcon = createElementWithClass("div", "email-icon");
	fetchAndInlineSVG(emailSvg, emailIcon);
	addressDiv.appendChild(emailIcon);
	addressDiv.appendChild(address);

	li.appendChild(addressDiv);

	return li;
};
