import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
	return (
		<footer className='bg-black text-white py-20'>
			<div className='container'>
				<div className='flex justify-between'>
					<div>
						<Link href='/'>
							<Image
								src='/images/logo.svg'
								alt='logo'
								width={192}
								height={32}
							></Image>
						</Link>
						<nav className='flex justify-end items-center mt-4'>
							<Link className='my-0 mr-4 relative pb-3 text-white' href='#'>
								About
							</Link>
							<Link className='my-0 mx-4 relative pb-3 text-white' href='#'>
								Careers
							</Link>
							<Link className='my-0 mx-4 relative pb-3 text-white' href='#'>
								Events
							</Link>
							<Link className='my-0 mx-4 relative pb-3 text-white' href='#'>
								Products
							</Link>
							<Link className='my-0 mx-4 relative pb-3 text-white' href='#'>
								Support
							</Link>
						</nav>
					</div>
					<div>
						<div className='mb-4 flex'>
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
