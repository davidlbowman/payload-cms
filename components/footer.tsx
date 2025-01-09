import Link from "next/link";

export function Footer() {
	return (
		<footer className="bg-background py-6 mt-8">
			<div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
				<p className="mb-4 md:mb-0">
					&copy; 2024 MyCompany. All rights reserved.
				</p>
				<nav className="space-x-4">
					<Link href="/about" className="text-foreground hover:underline">
						About
					</Link>
					<Link href="/blog" className="text-foreground hover:underline">
						Blog
					</Link>
				</nav>
			</div>
		</footer>
	);
}
