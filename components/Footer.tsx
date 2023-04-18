import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
	return (
		<footer>
			<div>
				<Link href='/'>
					<Image
						src='/images/logo.svg'
						alt='logo'
						width={192}
						height={32}
					></Image>
				</Link>
				<nav>
					<Link href='#'>About</Link>
					<Link href='#'>Careers</Link>
					<Link href='#'>Events</Link>
					<Link href='#'>Products</Link>
					<Link href='#'>Support</Link>
				</nav>
			</div>
			<div>
				<div>social media icons</div>
				<p>© 2021 Loopstudios. All rights reserved.</p>
			</div>
		</footer>
	);
}
