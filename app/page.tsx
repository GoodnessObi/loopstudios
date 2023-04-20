import About from '@/components/About';
import Hero from '@/components/Hero';
import { Josefin_Sans } from 'next/font/google';
const josefin = Josefin_Sans({ weight: '300', preload: false });

export default function Home({ ...props }) {
	return (
		<>
			<Hero />
			{/* <About /> */}
			<section>
				<h2>Our creations</h2>
				<button>See All</button>
				<div></div>
			</section>
		</>
	);
}
