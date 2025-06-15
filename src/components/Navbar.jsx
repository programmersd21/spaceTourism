import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/shared/logo.svg';

const Navbar = () => {
	const [open, setopen] = useState(false);
	const navRef = useRef(null);
	const btnRef = useRef(null);

	const handleClick = (event) => {
		if ((
			btnRef.current.contains(event.target) &&
			btnRef.current.classList.contains('bg-iconOpen')
		)||(navRef.current.contains(event.target)) ){
			setopen(true);
		} else {
			setopen(false);
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleClick);

		return () => {
			document.removeEventListener('click', handleClick);
		};
	}, []);

	return (
		<>
			<header className='flex justify-between items-center w-full p-6 sm:px-10 md:pl-14 md:pt-10 '>
				<img
					className='h-10 sm:h-12 aspect-square'
					src={logo}
					alt=''
				/>
				<div
					ref={btnRef}
					className={`sm:hidden ${
						open ? 'bg-iconClose' : 'bg-iconOpen'
					} bg-cover bg-center bg-no-repeat h-6 w-7 transition-all duration-200 ease-in-out z-10 cursor-pointer`}></div>
			</header>

			<nav
				ref={navRef}
				id='mainNav'
				className={`text-white  ${
					open
						? 'max-sm:visible max-sm:opacity-100'
						: 'max-sm:invisible max-sm:opacity-0'
				} transition-all duration-300 ease-in-out backdrop-blur-xl bg-white/[0.04] w-[15.875rem]  h-screen  absolute top-0 right-0 pt-28 flex flex-col  gap-8 font-barlow tracking-[2.7px] z-[2]
		sm:h-fit sm:flex-row sm:py-10 sm:px-[46px] sm:gap-[42px] sm:w-[28.2rem] sm:text-sm sm:tracking-[2.36px]
		md:w-[56%] md:top-10 md:text-base md:tarcking-[2.7px] md:gap-12 md:justify-center`}>
				<NavLink
					className='relative ml-8 flex gap-[13px] sm:ml-0 sm:gap-0 md:gap-3'
					activeClassName='active'
					to={'/'}>
					<span className='sm:hidden md:block font-bold '>00</span>
					HOME
				</NavLink>
				<NavLink
					className='relative ml-8 flex gap-[13px] sm:ml-0 sm:gap-0 md:gap-3'
					activeClassName='active'
					to={'/destination'}>
					<span className='sm:hidden md:block font-bold'>01</span>
					DESTINATION
				</NavLink>
				<NavLink
					className='relative ml-8 flex gap-[13px] sm:ml-0 sm:gap-0 md:gap-3'
					activeClassName='active'
					to={'/crew'}>
					<span className='sm:hidden md:block font-bold'>02</span>
					CREW
				</NavLink>
				<NavLink
					className='relative ml-8 flex gap-[13px] sm:ml-0 sm:gap-0 md:gap-3'
					activeClassName='active'
					to={'/tech'}>
					<span className='sm:hidden md:block font-bold'>03</span>
					TECHNOLOGY
				</NavLink>
				<NavLink
					className='relative ml-8 flex gap-[13px] sm:ml-0 sm:gap-0 md:gap-3'
					activeClassName='active'
					to={'/playground'}>
					<span className='sm:hidden md:block font-bold'>04</span>
					Play Ground
				</NavLink>
				<NavLink
					className='relative ml-8 flex gap-[13px] sm:ml-0 sm:gap-0 md:gap-3'
					activeClassName='active'
					to={'/quiz'}>
					<span className='sm:hidden md:block font-bold'>05</span>
					Quiz Arena
				</NavLink>
			</nav>
		</>
	);
};

export default Navbar;
