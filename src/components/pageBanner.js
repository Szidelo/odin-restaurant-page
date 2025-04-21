export const createPageBanner = (title) => {
	const banner = document.createElement("div");
	banner.classList.add("page-banner");

	const heading = document.createElement("h1");
	heading.classList.add("fade-in-opacity");
	heading.textContent = title;

	banner.appendChild(heading);
	return banner;
};
