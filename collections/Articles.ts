import { KeyTakeawaysBlock } from "@/components/KeyTakeaways";
import {
	BlocksFeature,
	FixedToolbarFeature,
	HeadingFeature,
	HorizontalRuleFeature,
	InlineToolbarFeature,
	lexicalEditor,
} from "@payloadcms/richtext-lexical";
import type { CollectionConfig } from "payload";

export const Articles: CollectionConfig = {
	slug: "articles",
	admin: {
		useAsTitle: "title",
		description: "Create and manage blog articles",
		group: "Content",
	},
	fields: [
		{
			name: "title",
			type: "text",
			required: true,
			admin: {
				placeholder: "Enter article title",
			},
		},
		{
			name: "author",
			type: "relationship",
			relationTo: "Team",
			required: true,
			admin: {
				description: "Select the article author",
			},
		},
		{
			name: "slug",
			type: "text",
			required: true,
			admin: {
				description:
					"URL-friendly version of the title (e.g., my-article-title)",
			},
			hooks: {
				beforeValidate: [
					({ value, data }) => {
						if (!value && data?.title) {
							return data.title
								.toLowerCase()
								.replace(/[^a-z0-9]+/g, "-")
								.replace(/^-|-$/g, "");
						}
						return value;
					},
				],
			},
		},
		{
			name: "content",
			type: "richText",
			required: true,
			editor: lexicalEditor({
				features: ({ defaultFeatures }) => [
					...defaultFeatures,
					FixedToolbarFeature(),
					InlineToolbarFeature(),
					HorizontalRuleFeature(),
					BlocksFeature({
						blocks: [KeyTakeawaysBlock],
					}),
				],
			}),
			admin: {
				description: "The main content of your article",
			},
		},
		{
			name: "publishedDate",
			type: "date",
			admin: {
				description: "The date this article was published",
				date: {
					pickerAppearance: "dayOnly",
				},
			},
			defaultValue: () => new Date(),
		},
	],
	versions: {
		drafts: true,
	},
};
