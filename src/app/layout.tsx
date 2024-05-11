import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

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
			<link rel="shortcut icon" href="/images/favicon.ico" />
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/images/apple-touch-icon.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/images/favicon-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/images/favicon-16x16.png"
			/>
			<body className={inter.className}>{children}</body>
			<GoogleTagManager gtmId="GTM-T6X945L7" />
		</html>
	);
}
