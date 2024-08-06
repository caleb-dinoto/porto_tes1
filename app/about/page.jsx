"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import Image from "next/legacy/image";
import FixedButon from "@/components/FixedButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Card from "./(spotify)/card.jsx";
import Quote from "./(quote)/quote.jsx";

// images
import Me1 from "@/public/img/me1.svg";
import Me2 from "@/public/img/me2.jpg";

import Hr from "@/components/Hr";

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
				<div className="relative h-screen w-screen  gap-4 p-10 flex justify-center items-center flex-col mb-10 overflow-hidden rounded-xl">
					<div className="z-0 mb-48 md:mb-0  md:absolute top-1/4  md:right-[10%] md:-translate-y-16 ">
						<motion.div
							initial={{ scale: 1 }}
							animate={{ scale: 1.6 }}
							transition={{ ease: "circOut", duration: 1 }}
							className="bg-slate-300 rounded-xl h-[400px] md:h-[600px] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0">
							<Image
								src={Me2}
								alt="Caleb"
								layout="fill"
								objectFit="cover"
								placeholder="blur"
							/>
						</motion.div>
					</div>
					<div className="z-10 w-full absolute md:w-auto md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 pt-4 backdrop-filter backdrop-blur-sm md:backdrop-blur-none bg-gray-100 bg-opacity-50 md:bg-transparent md:pt-0">
						<h1 className="md:bg-white bg-transparent lg:bg-transparent bg-opacity-50 md-px-0 text-black text-5xl md:text-8xl font-bold">
							About Me
						</h1>
						<Hr />
						<p className="title text-xl mt-4 tracking-wider text-gray-900 leading-[1.7rem] mb-5 ">
							A brief introduction about me and{" "}
							<span className="bg-transparent md:bg-gray-100 bg-opacity-50 xl:bg-transparent">
								{" "}
								my interest.
							</span>
						</p>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
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
						<h1 className="text-3xl font-bold mt-3">Who Am I?</h1>
					</div>
				</div>
				<div className="relative w-screen mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
					<div className="flex justify-center items-start flex-col mb-5 ">
						<div className="images relative w-full  aspect-square">
							<div className="rounded-xl absolute top-28 left-10 w-[60%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
								<motion.div
									initial={{ opacity: 0, scale: 0.5, x: 100 }}
									whileInView={{
										opacity: 1,
										scale: 1,
										x: 0,
									}}
									className="w-full h-full">
									<Image
										src={Me1}
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
							Caleb Steve Dinoto
						</h2>
						<p className="text-gray-600 text-justify title text-lg">
							Hey there, I'm Caleb Steve Dinoto, an active student currently pursuing a degree in Informatics Engineering at
							<span className="text-black font-medium">{" "}
								Universitas Multimedia Nusantara.
							</span>{" "}
							Originating from Tangerang, I've worked part-time as a
							<span className="text-black font-medium">{" "}
								barista, waiter, and online shop admin.
							</span>{" "}
							Originating from Tangerang, I've worked part-time as a
							<span className="text-black font-medium">{" "}
								barista, waiter, and online shop admin.
							</span>{" "}
							I've also been involved in various campus organizations and committees, contributing to different divisions, including the
							<span className="text-black font-medium">{" "}
								website division.
							</span>{" "}
							I have an adaptable personality, a strong commitment to persistence, and a passion for continuous learning. I'm currently seeking opportunities to deepen my knowledge in informatics through internships.
						</p>

					</motion.div>
				</div>
				<div className=" w-screen mx-auto container gap-4 p-10 grid grid-cols-1 md:grid-cols-2 mt-10 mb-24">
					<motion.div
						className="flex justify-center items-center flex-col mb-5 "
						initial={{
							opacity: 0,
							x: -200,
						}}
						whileInView={{
							opacity: 1,
							x: 0,
						}}
						transition={{
							delay: 0.5,

							type: "spring",
						}}>
						<h2 className="text-2xl md:text-xl font-normal mb-3 md:tracking-[.3rem] lg:tracking-[.5rem] uppercase ">
							Language & Framework
						</h2>
						<p className="text-gray-500 text-center tracking-widest md:px-5">
							<span className="text-black font-bold">HTML</span> |{" "}
							<span className="text-black font-bold">CSS</span> |{" "}
							<span className="text-black font-bold">
								Javascript
							</span>{" "}
							|{" "}
							<span className="text-black font-bold">
								React</span>{" "}
							|{" "}
							<span className="text-black font-medium">
								NextJS
							</span>{" "}
							|{" "}
							<span className="text-black font-bold">
								TailwindCSS
							</span>{" "}
							|{" "}
							<span className="text-black font-bold">
								Bootstrap
							</span>{" "}
							|{" "}
							<span className="text-black font-medium">
								NodeJS
							</span>{" "}
							|{" "}
							<span className="text-black font-bold">
								MySQL
							</span>{" "}
							|{" "}
							<span className="text-black font-medium">
								PHP</span>{" "}
							|{" "}
							<span className="text-black font-bold">
								Laravel
							</span>{" "}
							|{" "}
							<span className="text-black font-medium">
								Python
							</span>
						</p>
					</motion.div>
					<motion.div
						className="flex justify-start items-center flex-col mb-5 "
						initial={{
							opacity: 0,
							x: 200,
						}}
						whileInView={{
							opacity: 1,
							x: 0,
						}}
						transition={{
							delay: 0.6,

							type: "spring",
						}}>
						<h2 className="text-2xl md:text-xl font-normal mb-3 md:tracking-[.3rem] lg:tracking-[.5rem] uppercase">
							Tools
						</h2>
						<p className="text-gray-500 text-center tracking-wider md:px-">
							<span className="text-black font-bold">
								Visual Studio Code
							</span>{" "}
							|{" "}
							<span className="text-black font-medium">
								Jet Brains
							</span>{" "}
							| <span className="text-black font-bold">
								Git
							</span>{" "}
							|{" "}
							<span className="text-black font-bold">
								Github
							</span>{" "}
							|{" "}
							<span className="text-black font-medium">
								Figma
							</span>{" "}
							|{" "}
						</p>
					</motion.div>
				</div>
				<div className="mt-16 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
					<div className="flex justify-center items-center flex-col my-5 self-start ">
						<motion.div
							className="bg-gray-700 w-28 h-1 rounded-full mb-3 self-start"
							initial={{
								opacity: 0,
								x: -100,
							}}
							whileInView={{
								opacity: 1,
								x: 0,
							}}
							transition={{
								delay: 0.5,

								type: "spring",
							}}></motion.div>
						<motion.div
							className="bg-gray-700 w-28 h-1 rounded-full"
							initial={{
								opacity: 0,
								x: 200,
							}}
							whileInView={{
								opacity: 1,
								x: -50,
							}}
							transition={{
								delay: 0.5,

								type: "spring",
							}}></motion.div>
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
							Education &amp; Experience
						</motion.h1>
					</div>
				</div>
				<div className="w-screen mx-auto container gap-10 p-10 grid grid-cols-1 md:grid-cols-1 my-10 ">
					<motion.div
						className="flex justify-center items-start flex-col mb-5 "
						initial={{
							opacity: 0,
							x: -200,
						}}
						whileInView={{
							opacity: 1,
							x: 0,
						}}
						transition={{
							delay: 0.5,

							type: "spring",
						}}>
						<h2 className="text-2xl font-bold mb-3">
							Education | Universitas Multimedia Nusantara
						</h2>
						<h3 className="text-md font-medium mb-3 text-gray-500">
							informatics | 2021 - Now
						</h3>
						<p className="pl-3 text-gray-500  relative text-justify">
							<span className="before:border-s-2 before:absolute before:left-0 before:top-0 before:h-full before:border-gray-400 before:block before:w-2 before:content-'' "></span>
							I'm currently in my 7th semester at
							Universitas Multimedia Nusantara, majoring in Informatics
							Engineering. This journey has been nothing short of
							exhilarating, filled with countless opportunities to
							learn and grow. With a steadfast dedication to my
							studies throughout my academic journey, I've
							delved into various facets of computer science,
							honing my skills in web development, programming,
							and problem-solving.
						</p>
					</motion.div>
				</div>

				<div className="min-h-[80vh] w-screen mx-auto container  p-10 grid grid-cols-1 mt-10 ">
					<motion.div
						className="flex justify-center items-center flex-col mb-5 "
						initial={{
							opacity: 0,
							scale: 0.9,
						}}
						whileInView={{
							opacity: 1,
							scale: 1,
						}}
						transition={{
							delay: 0.6,
							duration: 2,
							ease: [0.22, 1, 0.36, 1],
						}}>
						<Quote />
					</motion.div>
				</div>
			</main>
		</>
	);
}
