import dynamic from "next/dynamic";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
	title: "Caleb | Portofolio",
	description:
		"My name is Caleb, I'm a web developer and I'm passionate about it. I'm currently studying at Universitas Multimedia Nusantara.",
	author: "Caleb Steve Dinoto",
	siteUrl: "https://www.alvalens.my.id",
	applicationName: "Calebs",
	keywords: [
		"calebs",
		"caleb",
		"caleb dinoto",
		"caleb steve",
		"caleb steve dinoto",
		"caleb stiven",
		"dinoto",
		"caleb porto",
		"Caleb UMN",
	],
	openGraph: {
		type: "website",
		url: "https://www.alvalens.my.id",
		title: "Caleb | Portofolio",
		description: "My name is Caleb, This is my portofolio website.",
		width: 1200,
		height: 630,
		images: [
			{
				url: "/og-image-rev.png",
				alt: "Caleb Portofolio",
			},
		],
		site_name: "Caleb | Portofolio",
	},
};


import Chat from "@/components/Chat";

const TopProgressBar = dynamic(() => import("@/components/TopProgressbar"), {
	ssr: false,
});



export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<TopProgressBar />
				<Navbar />
				{children}
				<Chat />
				<Analytics />
			</body>
		</html>
	);
}
