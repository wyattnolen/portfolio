import { useState } from "react";
import HightlightText from "./HightlightText";

const titles = {
	prefixes: ["Pumpkin", "Booger", "Sweet", "Golden", "Sugar", "Raisin"],
	suffixes: ["Eater", "Butt", "Apple", "Light", "Plum", "Bread", "Potato"],
};

const generateRandomTitle = () => {
	const randomPrefix = titles.prefixes[Math.floor(Math.random() * titles.prefixes.length)];
	const randomSuffix = titles.suffixes[Math.floor(Math.random() * titles.suffixes.length)];
	return `${randomPrefix}-${randomSuffix}`;
};

const AboutMe = () => {
	const [clarkTitle, setClarkTitle] = useState("Pumpkin-Eater");

	const handleClarkTitleClick = () => {
		setClarkTitle(generateRandomTitle());
	};
	
	return (
		<section className="line-relax">
			<p className="mb-4">
				Back in 2007, I took my first steps into web development when I tried my hand at developing MySpace themes, which sparked my passion for front-end development. Since then, I've gained experience across diverse environments, from a{" "}
				<a className="text-primary" target="_blank" href="https://zavoodi.com/"> start-up</a>, 
				a web consulting studio, a newspaper, to several mid-market e-commerce companies in industries such as 
				<a className="text-primary" target="_blank" href="https://www.doversaddlery.com/"> horse lifestyle</a>, 
				<a className="text-primary" target="_blank" href="https://www.halegroves.com/"> food & gifts</a>, 
				<a className="text-primary" target="_blank" href="https://www.vandykes.com/"> furniture</a>, 
				<a className="text-primary" target="_blank" href="https://www.agrisupply.com/"> tractor supply</a>, 
				<a className="text-primary" target="_blank" href="https://pureromance.com/"> health & beauty</a>, and 
				<a className="text-primary" target="_blank" href="https://www.blackwidowpro.com/"> hardware</a>.
			</p>

			<p className="mb-4">
				These days, my focus is threefold: building accessible user interfaces, optimizing website performance, and transforming designs to be modern and engaging. But sometimes I just want to 
				<a className="text-primary" target="_blank" href="https://codepen.io/wyattnolen/pen/zYPWrdg"> build fun things </a>.
			</p>

			<p className="mb-4">
				When I'm not coding, I'm being a father to my
				<span className="border border-accent border-dashed pointer p-1 m-1">
					<button type="button" className="clarkTitle btn-unset" onClick={handleClarkTitleClick}>
						{clarkTitle}
					</button>
				</span>.
			</p>
		</section>
	);
};

export default AboutMe;
