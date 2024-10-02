import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/navigation";
import { ThemeToggle } from "@/components/themeToggle";
import { Providers } from "./Providers";

export const metadata: Metadata = {
	title: "Fronend Competence",
	description: "Tailwind, Typescript and React documentation",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				{/* Layout UI */}

				<Providers>
					<Navigation />
					<ThemeToggle />
					<main>{children}</main>
				</Providers>
			</body>
		</html>
	);
}
