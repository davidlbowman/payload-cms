import { Lightbulb } from "lucide-react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

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
