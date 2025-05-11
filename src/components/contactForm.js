import { createElementWithClass } from "../utils/helpers";

export const createContactForm = () => {
	const form = createElementWithClass("form", "contact-form");

	const row1 = createElementWithClass("div", "form-row");
	row1.appendChild(createInputGroup("firstName", "First Name"));
	row1.appendChild(createInputGroup("lastName", "Last Name"));

	const row2 = createElementWithClass("div", "form-row");
	row2.appendChild(createInputGroup("subject", "Subject"));

	const row3 = createElementWithClass("div", "form-row");
	row3.appendChild(createTextareaGroup("message", "Message"));

	const row4 = createElementWithClass("div", "form-row");
	const submitBtn = document.createElement("button");
	submitBtn.type = "submit";
	submitBtn.textContent = "Send Message";
	submitBtn.className = "submit-button";
	row4.appendChild(submitBtn);

	form.append(row1, row2, row3, row4);
	return form;
};

const createInputGroup = (id, labelText) => {
	const group = createElementWithClass("div", "input-group");

	const input = document.createElement("input");
	input.placeholder = " ";
	input.type = "text";
	input.id = id;
	input.name = id;
	input.required = true;

	const label = document.createElement("label");
	label.htmlFor = id;
	label.textContent = labelText;

	group.appendChild(input);
	group.appendChild(label);
	return group;
};

const createTextareaGroup = (id, labelText) => {
	const group = createElementWithClass("div", "input-group");

	const textarea = document.createElement("textarea");
	textarea.placeholder = " ";
	textarea.id = id;
	textarea.name = id;
	textarea.rows = 4;
	textarea.required = true;
	textarea.style.resize = "none";

	const label = document.createElement("label");
	label.htmlFor = id;
	label.textContent = labelText;

	group.appendChild(textarea);
	group.appendChild(label);
	return group;
};
