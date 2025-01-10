import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { isExpandedDoc } from "@/lib/utils";
import type { Media, Team } from "@/payload-types";
import config from "@/payload.config";
import Image from "next/image";
import { getPayload } from "payload";

export default async function Home() {
	const payload = await getPayload({ config });
	const { docs: teamMembers } = await payload.find({
		collection: "Team",
		depth: 2,
		sort: "order",
	});

	const TeamMembers = teamMembers.map((member) => {
		return (
			<Card key={member.id} className="flex flex-col">
				<CardHeader>
					{isExpandedDoc<Media>(member.image) && member.image.url && (
						<Image
							src={member.image.url}
							alt={member.image.filename || member.name}
							width={200}
							height={200}
							className="rounded-full mx-auto"
						/>
					)}
					<h3 className="text-xl font-semibold text-center">{member.name}</h3>
				</CardHeader>
				<CardContent>
					<p className="text-center text-muted-foreground">{member.role}</p>
				</CardContent>
				<CardFooter>
					<p className="text-center">{member.description}</p>
				</CardFooter>
			</Card>
		);
	});

	return (
		<div className="container mx-auto px-4">
			<Navbar />
			<section className="my-12">
				<h1 className="text-4xl font-bold mb-4">Welcome to MyCompany</h1>
				<p className="text-lg mb-8">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui
					mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor
					neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim.
					Phasellus molestie magna non est bibendum non venenatis nisl tempor.
				</p>
			</section>

			<section className="my-12">
				<h2 className="text-3xl font-semibold mb-4">Meet Our Team</h2>
				<p className="mb-8">
					Our company was founded by a team of passionate individuals dedicated
					to innovation and excellence. Each brings a unique set of skills and
					experiences that drive our success.
				</p>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					{TeamMembers}
				</div>
				<p className="mt-8">
					Together, our team brings a wealth of experience and a shared vision
					for the future of our industry. Their complementary skills and unified
					approach drive innovation and excellence in everything we do.
				</p>
			</section>
			<Footer />
		</div>
	);
}
