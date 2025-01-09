import type { CollectionConfig } from "payload";

export const Team: CollectionConfig = {
	slug: "Team",
	admin: {
		useAsTitle: "name",
		description: "Manage team members and leadership profiles",
		group: "Content",
	},
	fields: [
		{
			name: "name",
			type: "text",
			required: true,
			minLength: 2,
			admin: {
				placeholder: "Enter full name",
				description: "Full name of the team member",
			},
		},
		{
			name: "role",
			type: "select",
			required: true,
			options: [
				{ label: "CEO", value: "CEO" },
				{ label: "CTO", value: "CTO" },
				{ label: "COO", value: "COO" },
				{ label: "Developer", value: "Developer" },
				{ label: "Designer", value: "Designer" },
				{ label: "Product Manager", value: "Product Manager" },
			],
			admin: {
				description: "Position or role in the company",
			},
		},
		{
			name: "description",
			type: "textarea",
			required: true,
			minLength: 10,
			maxLength: 500,
			admin: {
				placeholder: "Enter a brief bio or description",
				description: "Brief biography or description of the team member",
			},
		},
		{
			name: "image",
			type: "upload",
			relationTo: "media",
			required: true,
			admin: {
				description: "Profile photo (recommended size: 400x400px)",
			},
		},
		{
			name: "order",
			type: "number",
			admin: {
				description: "Display order (lower numbers appear first)",
				step: 1,
			},
			defaultValue: 99,
		},
	],
};
