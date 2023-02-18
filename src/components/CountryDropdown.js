import React, { useState, useEffect, useContext } from 'react';

import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

import { Menu } from '@headlessui/react';
import { HouseContext } from './HouseContext';
const CountryDropdown = () => {
	const [country, setCountry, countries] = useContext(HouseContext);
	const [isOpen, setIsOpen] = useState(false);
	return (
		<Menu
			as='div'
			className='relative dropdown '
		>
			<Menu.Button
				onClick={() => {
					setIsOpen(!isOpen);
				}}
				className='dropdown-btn'
			>
				<RiMapPinLine className='w-full text-left dropdown-icon-primary' />
				<div>
					<div className='text-[15px] font-medium leading-tight '>
						{country}
					</div>
					<div className='text-[13px]'>Select your place</div>
				</div>
				{isOpen ? (
					<RiArrowUpSLine className='dropdown-icon-secondary' />
				) : (
					<RiArrowDownSLine className='dropdown-icon-secondary' />
				)}
			</Menu.Button>

			<Menu.Items className='dropdown-menu'>
				{countries.map((country, index) => {
					return (
						<Menu.Item
							onClick={() => {
								setCountry(country);
							}}
							className='transition cursor-pointer hover-text-violet-700'
							as='li'
							key={index}
						/>
					);
				})}
			</Menu.Items>
		</Menu>
	);
};

export default CountryDropdown;
