import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { isExpandedDoc } from "@/lib/utils";
import type { Team } from "@/payload-types";
import config from "@/payload.config";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { notFound } from "next/navigation";
import { getPayload } from "payload";

interface Props {
	params: Promise<{
		slug: string;
	}>;
}

export default async function ArticlePage({ params }: Props) {
	const { slug } = await params;
	const payload = await getPayload({ config });
	const { docs } = await payload.find({
		collection: "articles",
		where: {
			slug: {
				equals: slug,
			},
		},
		depth: 1,
	});

	const [article] = docs;
	if (!article) notFound();

	return (
		<div className="container mx-auto px-4">
			<Navbar />
			<article className="prose prose-lg mx-auto my-12">
				<h1 className="text-4xl font-bold mb-4">{article.title}</h1>
				{isExpandedDoc<Team>(article.author) && (
					<p className="text-muted-foreground">
						By {article.author.name} •{" "}
						{article.publishedDate &&
							new Date(article.publishedDate).toLocaleDateString()}
					</p>
				)}
				<RichText data={article.content} />
			</article>
			<Footer />
		</div>
	);
}
