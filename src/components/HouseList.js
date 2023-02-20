import React, { useContext } from 'react';

import { HouseContext } from './HouseContext';

import House from './House';

import { Link } from 'react-router-dom';
import { ImSpinner2 } from 'react-icons/im';

const HouseList = () => {
	const { houses, loading, resetClick } = useContext(HouseContext);

	if (loading) {
		return (
			<ImSpinner2 className='mx-auto animate-spin text-violet-700 text-4xl mt-[200px]' />
		);
	}
	if (houses.length < 1) {
		return (
			<>
				<div className='text-center text-3xl text-gray-400 mt-48  mx-auto  flex flex-col gap-5'>
					Sorry, nothing found!
					<button
						onClick={resetClick}
						className='px-4 py-3 text-white transition rounded-lg hover:bg-white hover:text-violet-700 bg-violet-800 mx-auto'
					>
						Reset search
					</button>
				</div>
			</>
		);
	}
	return (
		<section className='mb-20'>
			<div className='container mx-auto'>
				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 lg:gap-14'>
					{houses.map((house, index) => {
						return (
							<Link
								to={`/property/${house.id}`}
								key={index}
							>
								<House house={house} />
							</Link>
						);
					})}
				</div>
			</div>
			;
		</section>
	);
};

export default HouseList;
