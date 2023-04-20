import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard() {
	return (
		<Link href='#' className='relative'>
			<Image
				src='/images/desktop/image-curiosity.jpg'
				alt='logo'
				width={256}
				height={450}
				style={{ objectFit: 'cover' }}
			></Image>
			<p className='absolute text-white uppercase left-10 bottom-10'>
				Deep Earth
			</p>
		</Link>
	);
}
