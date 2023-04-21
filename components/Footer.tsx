import Image from 'next/image';
import Link from 'next/link';
import { navList } from '@/lib/data';

export default function Footer() {
	return (
		<footer className='bg-black text-white py-20'>
			<div className='container'>
				<div className='flex flex-col items-center md:flex-row md:justify-between'>
					<div>
						<Link href='/'>
							<Image
								src='/images/logo.svg'
								alt='logo'
								width={192}
								height={32}
							></Image>
						</Link>
						<nav className='flex flex-col md:flex-row md:justify-end items-center mt-8 md:mt-4'>
							{navList.map((item, index) => (
								<Link
									key={index}
									className='my-0 mr-4 relative pb-3 text-white mb-4 md:mb-0'
									href={item.path}
								>
									{item.name}
								</Link>
							))}
						</nav>
					</div>
					<div className='mt-8 md:mt-0'>
						<div className='mb-4 flex justify-center md:items-start'>
							<Link href='/' className='inline-block mr-4'>
								<Image
									src='/images/icon-facebook.svg'
									alt='logo'
									width={24}
									height={24}
								></Image>
							</Link>
							<Link href='/' className='inline-block mr-4'>
								<Image
									src='/images/icon-twitter.svg'
									alt='logo'
									width={24}
									height={24}
								></Image>
							</Link>
							<Link href='/' className='inline-block mr-4'>
								<Image
									src='/images/icon-pinterest.svg'
									alt='logo'
									width={24}
									height={24}
								></Image>
							</Link>
							<Link href='/' className='inline-block mr-4'>
								<Image
									src='/images/icon-instagram.svg'
									alt='logo'
									width={24}
									height={24}
								></Image>
							</Link>
						</div>
						<p>© 2021 Loopstudios. All rights reserved.</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
