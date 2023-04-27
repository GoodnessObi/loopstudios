'use client';
import Link from 'next/link';
import Image from 'next/image';
import { navList } from '@/lib/data';
import { useState } from 'react';

export default function Header() {
	const [navIsOpen, setNavState] = useState(false);

	const toggleNav = () => {
		setNavState((prevState) => !prevState);
	};

	return (
		<>
			<div
				className={`bg-black flex flex-col min-h-[667px] h-full w-full py-16 px-6 transition-all duration-500 ease-in-out md:hidden z-10 absolute ${
					navIsOpen ? 'translate-x-0' : '-translate-x-full'
				}`}
				onClick={() => toggleNav()}
			>
				<nav className='flex flex-col h-full justify-center'>
					<>
						{navList.map((item, index) => (
							<Link
								key={index}
								className='mb-5 pb-2 text-white uppercase text-2xl hover:border-b'
								href={item.path}
							>
								{item.name}
							</Link>
						))}
					</>
				</nav>
			</div>
			<section className='pt-16 pb-8 py-0 bg-transparent border-0 w-full absolute z-10'>
				<div className='container'>
					<div className='flex justify-between items-center'>
						<Link href='/' className=''>
							<Image
								src='/images/logo.svg'
								alt='logo'
								width={192}
								height={32}
							></Image>
						</Link>
						<Image
							src={`/images/icon-${navIsOpen ? 'close' : 'hamburger'}.svg`}
							alt='logo'
							width={navIsOpen ? '20' : '24'}
							height={navIsOpen ? '10' : '16'}
							className='cursor-pointer md:hidden'
							onClick={() => toggleNav()}
						></Image>

						<nav className='md:flex md:justify-end md:items-center hidden'>
							{navList.map((item, index) => (
								<Link
									key={index}
									className='my-0 mx-4 relative pb-3 text-white hover:after:link-active active:after:link-active'
									href={item.path}
								>
									{item.name}
								</Link>
							))}
						</nav>
					</div>
				</div>
			</section>
		</>
	);
}
