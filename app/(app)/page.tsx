import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
	const founders = [
		{
			name: "Jane Doe",
			role: "CEO",
			src: "/janeDoe.webp",
			description:
				"Jane brings over 15 years of experience in tech leadership and innovation.",
		},
		{
			name: "John Smith",
			role: "CTO",
			src: "/johnSmith.webp",
			description:
				"John is a visionary technologist with a passion for cutting-edge solutions.",
		},
		{
			name: "Alice Johnson",
			role: "COO",
			src: "/aliceJohnson.webp",
			description:
				"Alice excels in optimizing operations and driving sustainable growth.",
		},
	];

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
				<h2 className="text-3xl font-semibold mb-4">Meet Our Founders</h2>
				<p className="mb-8">
					Our company was founded by a team of passionate individuals dedicated
					to innovation and excellence. Each brings a unique set of skills and
					experiences that drive our success.
				</p>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					{founders.map((founder) => (
						<Card key={founder.name} className="flex flex-col">
							<CardHeader>
								<Image
									src={founder.src}
									alt={founder.name}
									width={200}
									height={200}
									className="rounded-full mx-auto"
								/>
								<h3 className="text-xl font-semibold text-center">
									{founder.name}
								</h3>
							</CardHeader>
							<CardContent>
								<p className="text-center text-muted-foreground">
									{founder.role}
								</p>
							</CardContent>
							<CardFooter>
								<p className="text-center">{founder.description}</p>
							</CardFooter>
						</Card>
					))}
				</div>
				<p className="mt-8">
					Together, our founders bring a wealth of experience and a shared
					vision for the future of our industry. Their complementary skills and
					unified approach drive innovation and excellence in everything we do.
				</p>
			</section>
			<Footer />
		</div>
	);
}
