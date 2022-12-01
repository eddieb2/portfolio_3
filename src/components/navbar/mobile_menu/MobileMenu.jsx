import React from 'react';
import MobileMenuItem from './MobileMenuItem';

const MobileMenu = ({ dropDown, handleClick }) => {
	return (
		<div
			className={
				!dropDown
					? ' opacity-0'
					: 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center '
			}
		>
			<ul>
				<MobileMenuItem text='Home' location='home' handleClick={handleClick} />
				<MobileMenuItem text='About' location='about' handleClick={handleClick} />
				<MobileMenuItem text='Skills' location='skills' handleClick={handleClick} />
				<MobileMenuItem text='Projects' location='projects' handleClick={handleClick} />
				<MobileMenuItem text='Contact' location='contact' handleClick={handleClick} />
			</ul>
		</div>
	);
};

export default MobileMenu;
