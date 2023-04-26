import Link from 'next/link';
import ProductCard from './ProductCard';
import { products } from '@/lib/data';

export default function Products() {
	return (
		<section className='py-20 relative'>
			<div className='container'>
				<div className='flex justify-between items-center'>
					<h2 className='uppercase pb-8 text-5xl'>Our creations</h2>
					<Link href='#' role='button'>
						See All
					</Link>
				</div>
				<div className='flex flex-col md:flex-row flex-wrap w-full gap-y-4 justify-between'>
					{products.map((product, index) => (
						<ProductCard key={index} product={product} />
					))}
				</div>
			</div>
		</section>
	);
}
