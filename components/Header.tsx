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
				className={`bg-black flex flex-col h-full w-full z-10 py-16 px-8 ${
					navIsOpen ? 'mt-0' : '-mt-[100vh]'
				} transition-all duration-500 ease-in-out md:hidden fixed`}
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
			<section className='pt-16 pb-8 py-0 bg-transparent border-0 w-full absolute'>
				<div className='container'>
					<div className='flex justify-between items-center'>
						<Link href='/' className='z-20'>
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
							className='cursor-pointer md:hidden z-20'
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
