import { getImage } from "./helpers";

export const CHEFS = [
	{
		id: 1,
		name: "Ethan Lawson",
		image: getImage("chef-1", "chef"),
		designation: "Executive Chef",
		socials: {
			facebook: "https://facebook.com/ethan.lawson",
			instagram: "https://instagram.com/chef.ethan",
			linkedin: "https://linkedin.com/in/ethanlawsonchef",
		},
	},
	{
		id: 2,
		name: "Luca Moretti",
		image: getImage("chef-2", "chef"),
		designation: "Sous Chef",
		socials: {
			facebook: "https://facebook.com/luca.moretti",
			instagram: "https://instagram.com/luca_cooks",
			linkedin: "https://linkedin.com/in/lucamoretti",
		},
	},
	{
		id: 3,
		name: "Satoshi Takahashi",
		image: getImage("chef-3", "chef"),
		designation: "Pastry Chef",
		socials: {
			facebook: "https://facebook.com/satoshi.takahashi",
			instagram: "https://instagram.com/sweetsatoshi",
			linkedin: "https://linkedin.com/in/satoshitakahashi",
		},
	},
	{
		id: 4,
		name: "Carlos Reyes",
		image: getImage("chef-4", "chef"),
		designation: "Grill Master",
		socials: {
			facebook: "https://facebook.com/carlos.reyes",
			instagram: "https://instagram.com/grillkingcarlos",
			linkedin: "https://linkedin.com/in/carlosreyeschef",
		},
	},
];
