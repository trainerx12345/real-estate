import React, { useState, useEffect, useContext } from 'react';

import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

import { Menu } from '@headlessui/react';
import { HouseContext } from './HouseContext';
const PropertyDropdown = () => {
	const { property, setProperty, properties } = useContext(HouseContext);
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
				className='w-full text-left dropdown-btn'
			>
				<RiHome5Line className='dropdown-icon-primary' />
				<div className='w-full'>
					<div className='text-[15px] font-medium leading-tight '>
						{property}
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
				{properties.map((item, index) => {
					return (
						<Menu.Item
							onClick={() => {
								setProperty(item);
							}}
							className='transition cursor-pointer hover:text-violet-700'
							as='li'
							key={index}
						>
							{item}
						</Menu.Item>
					);
				})}
			</Menu.Items>
		</Menu>
	);
};

export default PropertyDropdown;
