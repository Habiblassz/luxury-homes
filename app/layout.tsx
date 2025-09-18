import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Luxury Homes | Lassz",
	description:
		"Discover your dream luxury home with Lassz. Explore exquisite properties, stunning designs, and unparalleled elegance.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
