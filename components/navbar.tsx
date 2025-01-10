import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Home, Menu } from "lucide-react";
import Link from "next/link";

export function Navbar() {
	return (
		<nav className="bg-background py-4">
			<div className="container mx-auto px-4 flex items-center justify-between">
				<Link href="/" className="flex items-center space-x-2">
					<Home className="h-6 w-6" />
					<span className="font-bold">MyCompany</span>
				</Link>
				<div className="hidden md:flex space-x-4">
					<Link href="/blog" className="text-foreground hover:underline">
						Blog
					</Link>
				</div>
				<Sheet>
					<SheetTrigger asChild>
						<Button variant="outline" size="icon" className="md:hidden">
							<Menu className="h-6 w-6" />
							<span className="sr-only">Toggle menu</span>
						</Button>
					</SheetTrigger>
					<SheetContent side="right">
						<SheetTitle className="text-left">Navigation Menu</SheetTitle>
						<nav className="flex flex-col space-y-4">
							<Link href="/about" className="text-foreground hover:underline">
								About
							</Link>
							<Link href="/blog" className="text-foreground hover:underline">
								Blog
							</Link>
						</nav>
					</SheetContent>
				</Sheet>
			</div>
		</nav>
	);
}
