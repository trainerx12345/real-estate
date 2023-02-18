import React from 'react';

import Image from '../assets/img/house-banner.png';

import Search from './Search';
const Banner = () => {
	return (
		<section className='h-full max-h-[640px] mb-8 xl:mb-24'>
			<div className='flex flex-col lg:flex-row'>
				<div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left  justify-center flex-1 px-4 lg:px-0'>
					<h1 className='text-4xl lg:text-[58px] font-semibold leadding-none mb-6' >
						Rent<span className='text-violet-700'>Your Dream House With Us.</span>
					</h1>
					<p className='max-w-[480px] mb-8'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
						perspiciatis? Reprehenderit reiciendis ipsam at ad ex impedit
						mollitia soluta maxime numquam, tempora aperiam sunt minima libero
						nostrum, deleniti dolor facere.
					</p>
				</div>
				<div className='items-end justify-end flex-1 hidden lg:flex'>
					<img
						src={Image}
						alt='House-banner'
					/>
				</div>
			</div>
			<Search />
		</section>
	);
};

export default Banner;
