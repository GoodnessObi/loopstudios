import Image from 'next/image';
import Link from 'next/link';
import ProductCard from './ProductCard';

export default function Products() {
	return (
		<section className='py-20'>
			<div className='container'>
				<div className='flex justify-between items-center'>
					<h2 className='uppercase pb-8 text-5xl'>Our creations</h2>
					<button>See More</button>
				</div>
				<div className='grid grid-cols-4 gap-y-4'>
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
				</div>
			</div>
		</section>
	);
}
