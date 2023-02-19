import React from 'react';

import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.svg';

const Header = () => {
	return (
		<header className='py-6 mb-12 header-b'>
			<div className='container flex items-center justify-between mx-auto'>
				<Link to='/'>
					<img
						src={Logo}
						alt='Logo of Real Estate'
					/>
				</Link>
				<div className='flex items-center gap-6 '>
					<Link
						className='transition hover:text-violet-900'
						to='/login'
					>
						Log In
					</Link>
					<Link
						className='px-4 py-3 text-white transition rounded-lg hover:bg-white hover:text-violet-700 bg-violet-800'
						to='/signup'
					>
						Sign up
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
