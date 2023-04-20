import Link from 'next/link';
import Image from 'next/image';

// 	&:hover,
// 	&:active {
// 		&:after {
// 			display: block;
// 			position: absolute;
// 			content: '';
// 			background: hsl(0, 0%, 100%);
// 			height: 1.75px;
// 			width: 40%;
// 			bottom: 0;
// 			left: 0;
// 			right: 0;
// 			margin-left: auto;
// 			margin-right: auto;
// 		}
// 	}
// `;

export default function Header({ ...props }) {
	return (
		<section className='pt-16 pb-8 py-0 bg-transparent border-0 w-full absolute'>
			<div className='container'>
				<div className='flex justify-between items-center'>
					<Link href='/'>
						<Image
							src='/images/logo.svg'
							alt='logo'
							width={192}
							height={32}
						></Image>
					</Link>
					<nav className='flex justify-end items-center '>
						<Link className='my-0 mx-4 relative pb-3 text-white' href='#'>
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
			</div>
		</section>
	);
}
