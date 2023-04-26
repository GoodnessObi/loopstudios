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
			className='relative block lg:basis-[24%] md:basis-[49%] h-[120px] sm:h-[240px] md:h-[450px]'
		>
			<Image
				src={product.url}
				alt={product.alt}
				fill
				className='hidden md:inline-block object-cover brightness-[.7]'
			></Image>
			<Image
				src={product.urlMobile}
				alt={product.alt}
				fill
				className='md:hidden object-cover brightness-[.7]'
			></Image>
			<p
				className={`font-sans absolute text-white uppercase left-4 md:left-6 bottom-4 md:bottom-6 text-2xl ${
					product.name === 'the grid' ? 'w-[30%]' : 'w-2/5 lg:w-2/4'
				}`}
			>
				{product.name}
			</p>
		</Link>
	);
}
