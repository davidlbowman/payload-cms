import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import type {
	JSXConvertersFunction,
	SerializedLexicalNodeWithParent,
} from "@payloadcms/richtext-lexical/react";
import { Lightbulb } from "lucide-react";
import type { Block } from "payload";

interface KeyTakeawaysProps {
	title?: string;
	points: string[];
}

export function KeyTakeaways({
	title = "Key Takeaways",
	points,
}: KeyTakeawaysProps) {
	return (
		<Accordion
			type="single"
			collapsible
			className="w-full border rounded-lg bg-muted p-4 mb-6"
		>
			<AccordionItem value="item-1" className="border-none">
				<AccordionTrigger className="hover:no-underline">
					<h2 className="text-lg font-semibold flex items-center">
						<Lightbulb className="mr-2 h-5 w-5" />
						{title}
					</h2>
				</AccordionTrigger>
				<AccordionContent>
					<ul className="list-disc pl-5 space-y-2 mt-2">
						{points.map((point) => (
							<li key={point}>{point}</li>
						))}
					</ul>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}

export const KeyTakeawaysBlock: Block = {
	slug: "keyTakeaways",
	fields: [
		{
			name: "title",
			type: "text",
			defaultValue: "Key Takeaways",
			required: false,
		},
		{
			name: "points",
			type: "array",
			required: true,
			fields: [
				{
					name: "point",
					type: "text",
					required: true,
				},
			],
		},
	],
};

interface KeyTakeawaysNode extends SerializedLexicalNodeWithParent {
	fields: {
		title?: string;
		points: Array<{
			point: string;
		}>;
	};
}

export const keyTakeawayConverter: JSXConvertersFunction = ({
	defaultConverters,
}) => ({
	...defaultConverters,
	blocks: {
		keyTakeaways: ({ node }: { node: KeyTakeawaysNode }) => {
			const points = node.fields.points.map((item) => item.point);

			return <KeyTakeaways title={node.fields.title} points={points} />;
		},
	},
});
