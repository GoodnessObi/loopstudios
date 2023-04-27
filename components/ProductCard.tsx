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
			className='group relative block lg:basis-[24%] md:basis-[49%] h-[120px] sm:h-[240px] md:h-[450px] hover:after:image-hover'
		>
			<Image
				src={product.url}
				alt={product.alt}
				fill
				className='hidden md:inline-block object-cover brightness-[.7] group-hover:opacity-70'
			></Image>
			<Image
				src={product.urlMobile}
				alt={product.alt}
				fill
				className='md:hidden object-cover brightness-[.7]'
			></Image>
			<p
				className={`font-sans absolute text-white group-hover:text-black group-hover:z-10 uppercase left-4 md:left-8 lg:left-10 bottom-4 md:bottom-10 text-2xl md:text-3xl ${
					product.name === 'the grid' ? 'w-[30%]' : 'w-2/5 md:w-2/3 lg:w-3/5'
				}`}
			>
				{product.name}
			</p>
		</Link>
	);
}
