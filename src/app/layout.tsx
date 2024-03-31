import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Weather App",
	description: "Weather client app using the OpenWeather API",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className="max-l:max-w-[640px] max-l:w-full bg-gray-primary max-w-[1440px] m-auto select-none"
		>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
