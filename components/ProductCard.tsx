import Image from 'next/image';
import Link from 'next/link';
import { product } from '@/types/product';

type Props = {
	product: product;
};

export default function ProductCard({ product }: Props) {
	return (
		<Link href='#' className='relative md:basis-1/2 lg:basis-1/4 mb-4'>
			<Image
				src={product.url}
				alt={product.alt}
				width={256}
				height={450}
				style={{ objectFit: 'cover' }}
				className='hidden md:inline-block'
			></Image>
			<Image
				src={product.urlMobile}
				alt={product.alt}
				width={654}
				height={240}
				style={{ objectFit: 'cover' }}
				className='md:hidden'
			></Image>
			<p className='absolute text-white uppercase left-10 bottom-10'>
				{product.name}
			</p>
		</Link>
	);
}
