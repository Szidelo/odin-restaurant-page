import "../styles/contact/contact.css";
import { createPageBanner } from "../components/pageBanner.js";
import { createElementWithClass } from "../utils/helpers.js";
import { createContactItem } from "../components/contactItem.js";
import { createContactForm } from "../components/contactForm.js";
import { renderFooter } from "./footer.js";

const CONTACT_ITEMS = [
	{ LABEL: "Booking", ADDRESS: "booking@contact.com" },
	{ LABEL: "General", ADDRESS: "info@contact.com" },
	{ LABEL: "Technical", ADDRESS: "tech@contact.com" },
];

const renderContact = () => {
	const content = document.querySelector("#content");
	content.innerHTML = "";

	content.appendChild(createPageBanner("Contact Us"));

	const pageContact = createElementWithClass("div", "page-contact", "fade-in");

	const contactHeader = createContactHeader();
	pageContact.appendChild(contactHeader);

	const contactContent = createContactContent();
	pageContact.appendChild(contactContent);

	const footer = renderFooter();
	pageContact.appendChild(footer);

	content.appendChild(pageContact);
};

const createContactHeader = () => {
	const header = createElementWithClass("div", "contact-header");
	const sectionTitle = createElementWithClass("h4", "section-title");
	sectionTitle.textContent = "Contact Us";

	const heading = document.createElement("h2");
	heading.textContent = "Contact For Any Query";

	header.appendChild(sectionTitle);
	header.appendChild(heading);
	return header;
};

const createContactContent = () => {
	const content = createElementWithClass("div", "contact-content");

	const contactList = createContactList();
	content.appendChild(contactList);

	const container = createElementWithClass("div", "contact-section-container");
	const contactMap = createLocationMap();
	container.appendChild(contactMap);

	const contactForm = createContactForm();
	container.appendChild(contactForm);
	content.appendChild(container);

	return content;
};

const createContactList = () => {
	const listContainer = createElementWithClass("div", "contact-list");

	CONTACT_ITEMS.forEach((item) => {
		const li = createContactItem(item);
		listContainer.appendChild(li);
	});

	return listContainer;
};

const createLocationMap = () => {
	const mapContainer = createElementWithClass("div", "map-container");

	const iframe = document.createElement("iframe");
	iframe.className = "map-iframe";
	iframe.src = "https://maps.google.com/maps?q=123+Street,+New+York,+USA&output=embed";
	iframe.allowFullscreen = true;
	iframe.loading = "lazy";
	iframe.referrerPolicy = "no-referrer-when-downgrade";
	iframe.style.border = "0";

	mapContainer.appendChild(iframe);

	return mapContainer;
};

export { renderContact };
