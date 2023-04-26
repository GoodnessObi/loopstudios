import Link from 'next/link';
import ProductCard from './ProductCard';
import { products } from '@/lib/data';

export default function Products() {
	return (
		<section className='pb-28 md:pb-48 pt-20'>
			<div className='container'>
				<div className='flex justify-center md:justify-between items-center mb-10 md:mb-20'>
					<h2 className='font-sans uppercase text-4xl md:text-5xl'>
						Our creations
					</h2>
					<Link
						href='#'
						role='button'
						className='hidden md:inline-flex py-2 px-10 border-2 border-lp-deepGray uppercase text-black tracking-[0.2em]'
					>
						See All
					</Link>
				</div>
				<div className='flex flex-col md:flex-row flex-wrap w-full gap-y-6 md:gap-y-4 justify-between'>
					{products.map((product, index) => (
						<ProductCard key={index} product={product} />
					))}
				</div>
				<div className='md:hidden flex justify-center mt-10'>
					<Link
						href='#'
						role='button'
						className='py-2 px-10 border-2 border-lp-deepGray uppercase text-black tracking-[0.2em]'
					>
						See All
					</Link>
				</div>
			</div>
		</section>
	);
}
