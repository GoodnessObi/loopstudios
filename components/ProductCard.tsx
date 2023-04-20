import Image from 'next/image';
import Link from 'next/link';
import { product } from '@/types/product';

type Props = {
	product: product;
};

export default function ProductCard({ product }: Props) {
	return (
		<Link href='#' className='relative'>
			<Image
				src={product.url}
				alt={product.alt}
				width={256}
				height={450}
				style={{ objectFit: 'cover' }}
			></Image>
			<p className='absolute text-white uppercase left-10 bottom-10'>
				{product.name}
			</p>
		</Link>
	);
}
