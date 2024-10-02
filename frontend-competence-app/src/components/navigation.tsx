"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navItems = [
	{ name: "Home", href: "/" },
	{ name: "Tailwind", href: "/tailwindPage" },
	{ name: "TypeScript", href: "/typescriptPage" },
	{ name: "React", href: "/reactPage" },
];

export default function Navigation() {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();

	return (
		<nav className="bg-white dark:bg-cyan-900 shadow-md">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
						<Link href="/" className="flex-shrink-0">
							<span className="text-2xl font-bold text-primary">Logo</span>
						</Link>
						<div className="hidden md:block">
							<div className="ml-10 flex items-baseline space-x-4">
								{navItems.map((item) => (
									<Link
										key={item.name}
										href={item.href}
										className={`px-3 py-2 rounded-md text-sm font-medium ${
											pathname === item.href
												? "bg-primary text-primary-foreground"
												: "text-muted-foreground hover:bg-muted hover:text-primary"
										}`}
									>
										{item.name}
									</Link>
								))}
							</div>
						</div>
					</div>
					<div className="-mr-2 flex md:hidden">
						<button
							onClick={() => setIsOpen(!isOpen)}
							type="button"
							className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-muted focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white"
							aria-controls="mobile-menu"
							aria-expanded={isOpen}
						>
							<span className="sr-only">Open main menu</span>
							{isOpen ? (
								<X className="block h-6 w-6" aria-hidden="true" />
							) : (
								<Menu className="block h-6 w-6" aria-hidden="true" />
							)}
						</button>
					</div>
				</div>
			</div>

			{isOpen && (
				<div className="md:hidden" id="mobile-menu">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
						{navItems.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className={`block px-3 py-2 rounded-md text-base font-medium ${
									pathname === item.href
										? "bg-primary text-primary-foreground"
										: "text-muted-foreground hover:bg-muted hover:text-primary"
								}`}
								onClick={() => setIsOpen(false)}
							>
								{item.name}
							</Link>
						))}
					</div>
				</div>
			)}
		</nav>
	);
}
