"use client";
import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import Image from "next/legacy/image";

// images
import OMB1 from "@/public/projects/OMB1.png";
import OMB2 from "@/public/projects/OMB2.png";
import OMB3 from "@/public/projects/OMB3.png";
import ProjectAll from "@/public/img/projects-all.jpg";
// main project image
import starlight from "@/public/projects/starlight/star1.png";
import onair from "@/public/projects/Tvonair/tv1.png";
import omb2024 from "@/public/projects/OMB2024/tools.png";
import news from "@/public/projects/swaranews/sw1.png";
import UMNHUB from "@/public/projects/HCI/HCI1.png";
import raka from "@/public/projects/GGJ/raka1.png";
import AIKO from "@/public/projects/petsop/petsop1.png";
import Porto from "@/public/projects/porto/7day.png";

import Hr from "@/components/Hr";
import FixedButon from "@/components/FixedButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const projects = [
	{
		title: "Starlight UMN",
		desc: "Starlight is one of the student activities designed to accommodate and channel individual interests and talents.",
		year: "2024",
		tech: "react, laravel",
		bg: starlight,
		slug: "starlight",
	},
	{
		title: "TVonair",
		desc: "My second React project. This project is a landing page that I created using ReactJS, and TailwindCSS.",
		year: "2023",
		tech: "Javascript, React Js",
		bg: onair,
		slug: "tv-onair",
	},
	{
		title: "Swara Pembangunan News",
		desc: "Discord bot that can search images on google and send the result to discord channel, with this bot you can search images on google without leaving discord.",
		year: "2024",
		tech: "WordPress, Premium WordPress Theme",
		bg: news,
		slug: "swara-pembangunan-news",
	},
	{
		title: "UMN HUB (UI/UX)",
		desc: "A game project that my friends and I made in the 4th semester at the Global Game Jam 2023 event",
		year: "2023",
		tech: "FIGMA",
		bg: UMNHUB,
		slug: "HCI-FIGMA",
	},
	{
		title: "The Great Adventure of Raka",
		desc: "A game project that my friends and I made in the 4th semester at the Global Game Jam 2023 event",
		year: "2023",
		tech: "C#, Unity",
		bg: raka,
		slug: "raka-website",
	},
	{
		title: "AIKO PETSHOP",
		desc: "My friends and I developed a landing page for small and medium-sized enterprises (SMEs) as our final project in the third semester.",
		year: "2022",
		tech: "PHP, Laravel, Bootstap, MySQL, javascript",
		bg: AIKO,
		slug: "PTI-projek",
	},
	{
		title: "7 days UMN",
		desc: "the first React website I created with my friends was a web-based simulation game that takes users through a seven-day experience at UMN.",
		year: "2022",
		tech: "HTML, CSS, Javascript, react",
		bg: Porto,
		slug: "7-days-umn-webpro",
	},
];

export default function Page() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const handleBack = () => {
		window.location.href = "/";
	};
	return (
		<>
			<main className="overflow-hidden">
				<FixedButon onClick={handleBack}>
					<FontAwesomeIcon
						icon={faChevronLeft}
						className="text-black pr-10"
					/>
				</FixedButon>
				<div className="relative h-screen w-screen  gap-4 p-0 flex justify-center items-center flex-col mb-10 overflow-hidden">
					{/* <div className="z-0 mb-48 md:mb-0  md:absolute top-1/4  md:right-[10%] md:-translate-y-16 ">
						<motion.div
							initial={{ scale: 1 }}
							animate={{ scale: 1.6 }}
							transition={{ duration: 1, ease: "circOut" }}
							className="bg-slate-300 rounded-sm h-[400px] md:h-[600px] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0 ">
							<Image
								src={ProjectAll}
								alt="Caleb"
								layout="fill"
								objectFit="cover"
								placeholder="blur"
							/>
						</motion.div>
					</div> */}
					<div className="z-10 w-full absolute md:w-auto md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 pt-4 backdrop-filter backdrop-blur-sm md:backdrop-blur-none md:backdrop-filter-none bg-gray-100 bg-opacity-50 md:bg-transparent md:pt-0">
						<h1 className="md:bg-white bg-transparent lg:bg-transparent bg-opacity-50 md-px-0 text-black text-5xl md:text-8xl font-bold">
							My Projects
						</h1>
						<Hr />
						<p className="title  text-xl mt-4 tracking-wider text-gray-900 leading-[1.7rem] mb-5">
							List of my projects that I have done and{" "}
							<span className="bg-transparent md:bg-gray-100 bg-opacity-50 xl:bg-transparent">
								{" "}
								currently working on.
							</span>
						</p>
						<motion.div
							initial={{ opacity: 0, y: 100 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, ease: "circOut" }}
							onClick={() => {
								window.scrollTo({
									top: 1000,
									behavior: "smooth",
								});
							}}
							className="mb-3">
							<Button variation="primary">Scroll Down</Button>
						</motion.div>
					</div>
				</div>
				<div className="mt-10 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
					<div className="flex justify-center items-center flex-col my-5 self-start ">
						<div className="bg-gray-700 w-28 h-1 rounded-full mb-3 self-start"></div>
						<div className="bg-gray-700 w-28 h-1 rounded-full translate-x-12"></div>
						<h1 className="text-3xl font-bold mt-3">Hightlight</h1>
					</div>
				</div>
				<div className="relative w-screen mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
					<div className="flex justify-center items-start flex-col mb-5 ">
						<div className="images relative w-full aspect-square rounded-xl">
							<div className="absolute top-28 left-10 w-[50%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
								<motion.div
									initial={{ opacity: 0, scale: 0.5, x: 100 }}
									whileInView={{
										opacity: 1,
										scale: 1,
										x: 0,
									}}
									className="w-full h-full shadow-lg">
									<Image
										src={OMB1}
										alt="Caleb"
										layout="fill"
										objectFit="cover"
										placeholder="blur"
									/>
								</motion.div>
							</div>
							<div className="absolute top-16 right-28 w-[30%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
								<motion.div
									initial={{
										opacity: 0,
										scale: 0.5,
										x: -100,
									}}
									whileInView={{
										opacity: 1,
										scale: 1,
										x: 0,
									}}
									transition={{ delay: 0.3 }}
									className="w-full h-full shadow-lg ">
									<Image
										src={OMB2}
										alt="Caleb"
										layout="fill"
										objectFit="cover"
										placeholder="blur"
										objectPosition="0% 0%"
									/>
								</motion.div>
							</div>
							<div className="absolute bottom-16 right-20 w-[40%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
								<motion.div
									initial={{
										opacity: 0,
										scale: 0.5,
										x: -100,
									}}
									whileInView={{
										opacity: 1,
										scale: 1,
										x: 0,
									}}
									transition={{
										delay: 0.5,
									}}
									className="w-full h-full shadow-lg">
									<Image
										src={OMB3}
										alt="Caleb"
										layout="fill"
										objectFit="cover"
										placeholder="blur"
									/>
								</motion.div>
							</div>
						</div>
					</div>
					<motion.div
						className="flex justify-center items-start flex-col mb-5 md:px-10"
						initial={{
							opacity: 0,
							x: 200,
						}}
						whileInView={{
							opacity: 1,
							x: 0,
						}}
						transition={{
							delay: 0.5,

							type: "spring",
						}}>
						<h2 className="text-2xl font-bold tracking-wider mb-3">
							OMB UMN 2024
						</h2>
						<p className="text-gray-600 text-justify title text-lg">
							As a member of the website division committee for the OMB UMN 2024 website,
							my colleague and I worked as UI/UX designers, collaborating closely with
							the Frontend team. This experience was invaluable, as I learned to create
							more structured designs by focusing on color usage, supergraphics, and an
							improved design flow. These efforts resulted in mockup designs and website
							prototypes that are not only visually appealing but also comfortable for
							users to navigate.

						</p>{" "}
						<div className="mt-3">
							<Button variation="primary">
								<Link href="projects/OMB2024 ">More</Link>
							</Button>
							<Button variation="secondary">
								<a
									href="https://omb.umn.ac.id/"
									target="_blank"
									rel="noopener noreferrer">
									Preview
								</a>
							</Button>
						</div>
					</motion.div>
				</div>
				<div className="mt-16 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
					<div className="flex justify-start items-start flex-col my-5 self-start ">
						<Hr />
						<motion.h1
							className="text-3xl font-bold mt-3"
							initial={{
								opacity: 0,
								x: -200,
							}}
							whileInView={{
								opacity: 1,
								x: 0,
							}}
							transition={{
								delay: 0.7,
								type: "spring",
							}}>
							Other Note Worthy Projects
						</motion.h1>
					</div>
				</div>
				<div className="w-screen mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10 cursor-pointer">
					{/* loop projeects data */}
					{projects.map((project, index) => (
						<Link href={"projects/" + project.slug} key={index}>
							<motion.div
								className="z-10 relative flex justify-center items-start flex-col mb-5 md:px-10 w-full h-auto bg-gray-400 group/tes py-20 px-5 md:py-2 aspect-video "
								initial={{
									opacity: 0,
									x: -200,
								}}
								whileInView={{
									opacity: 1,
									x: 0,
								}}
								transition={{
									type: "spring",
								}}>
								{" "}
								{/* Add relative here */}
								<Image
									src={project.bg.src}
									alt="Caleb"
									layout="fill"
									objectFit="cover"
									placeholder="blur"
									className="bg-slate-950 opacity-10  group-hover/tes:opacity-100 transition-all ease duration-500"
									blurDataURL={project.bg.blurDataURL}
								/>
								<div className="absolute top-0 left-0 bg-gray-600 px-4 py-2">
									<h4 className="text-white">
										{project.year}
									</h4>
								</div>
								<div className="transition-all ease duration-500 opacity-100 content text-center group-hover/tes:opacity-0 z-10">
									<h1 className="text-3xl font-bold mb-3">
										{project.title}
									</h1>
									<p>{project.desc}</p>
									<div className="flex justify-center items-center flex-row mt-5 flex-wrap">
										{project.tech
											.split(",")
											.map((t, index) => (
												<span
													key={index}
													className="m-1 px-4 py-2 bg-gray-600 text-white ">
													{t}
												</span>
											))}
									</div>
								</div>
							</motion.div>
						</Link>
					))}
				</div>
				{/* view in archive btn */}
				<div className="flex justify-center items-center flex-col my-5 self-start ">
					<Button variation="primary">
						<Link href="projects/archive">View In Archive</Link>
					</Button>
				</div>
			</main>
		</>
	);
}
