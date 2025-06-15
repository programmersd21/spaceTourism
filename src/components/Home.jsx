import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function generateRandomNumber() {
	return Math.floor(Math.random() * 3);
}

const Home = () => {     //0             //1     //2      //3
	const exploreTo = ['/destination', '/crew', '/tech','/playground','/quiz'];
	const [randomIndex, setRandomIndex] = useState(generateRandomNumber);
	const handleClick = () => {
		setRandomIndex(generateRandomNumber);
	};

	return (
		<>
			<div className="relative h-screen w-full text-white">
				{/* Spline Background */}
				<Spline
					scene="https://prod.spline.design/8wC5loKBgn7kE60i/scene.splinecode"
					className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-auto"
				/>

				{/* Main Content */}
				<Navbar />
				<div className="text-center max-w-[327px] sm:max-w-[450px] mx-auto md:mx-[165px] mt-12 sm:mt-[100px] md:text-left pointer-events-none">
					<h2
						className="text-base text-secondary tracking-[2.7px] uppercase font-barlow mb-4 sm:mb-0 sm:text-xl sm:tracking-[3.38px]
					md:text-[28px] md:tracking-[4.72px]"
					>
						So, you want to travel to
					</h2>
					<h1 className="text-[80px] font-bellefair mt-4 mb-[26px] sm:my-6 sm:text-8xl md:text-[120px]">
						SPACE
					</h1>
					<p className="text-[15px] sm:text-base md:text-lg text-secondary font-barlow mt-4 sm:mt-0">
						Let’s face it; if you want to go to space, you might as well
						genuinely go to outer space and not hover kind of on the edge of it.
						Well sit back, and relax because we’ll give you a truly out of this
						world experience!
					</p>
				</div>
				{console.log(randomIndex)}
				<Link
					onClick={handleClick}
					to={exploreTo[randomIndex]}
					className="absolute bg-white text-primary h-36 sm:h-52 aspect-square rounded-full flex items-center justify-center text-xl tracking-[1.25px] sm:text-[32px] sm:tracking-[2px] font-bellefair uppercase md:hover:shadow-[0px_0px_0px_45px_rgba(250,250,250,0.15)] transition-all duration-300 mx-auto left-0 right-0 bottom-[48px]
					md:left-auto md:right-[12rem] md:bottom-[130px]"
				>
					Explore
				</Link>
			</div>
		</>
	);
};

export default Home;
