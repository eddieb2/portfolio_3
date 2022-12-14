import React, { useState } from 'react';
// Image Imports
import dark_zone_sprite from '../../assets/dark_zone_sprite.png';
import Menu from './menu/Menu';
import MobileMenu from './mobile_menu/MobileMenu';
import DropdownIcon from './Dropdown';
import Sidebar from './sidebar/Sidebar';

const NavBar = ({ socialRedirect }) => {
	const [dropDown, setDropDown] = useState(false);

	const handleClick = () => {
		setDropDown(!dropDown);
	};

	return (
		<div className='fixed flex h-[80px] w-full items-center justify-between bg-[#0a192f] px-4 text-gray-300 shadow-sm shadow-red-400'>
			<div>
				<img src={dark_zone_sprite} alt='Logo Image' />
			</div>
			<Menu />
			<DropdownIcon dropDown={dropDown} handleClick={handleClick} />
			<MobileMenu dropDown={dropDown} handleClick={handleClick} />
			<Sidebar socialRedirect={socialRedirect} />
		</div>
	);
};

export default NavBar;
