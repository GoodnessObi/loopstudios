import Image from 'next/image';
import Link from 'next/link';
import { product } from '@/types/product';

type Props = {
	product: product;
};

export default function ProductCard({ product }: Props) {
	return (
		<Link
			href='#'
			className='relative block lg:basis-[24%] md:basis-[49%] h-[240px] md:h-[450px]'
		>
			<Image
				src={product.url}
				alt={product.alt}
				fill
				className='hidden md:inline-block object-cover'
			></Image>
			<Image
				src={product.urlMobile}
				alt={product.alt}
				fill
				className='md:hidden object-cover'
			></Image>
			<p className=' font-sans absolute text-white uppercase left-10 bottom-10'>
				{product.name}
			</p>
		</Link>
	);
}
