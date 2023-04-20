import About from '@/components/About';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import { Josefin_Sans } from 'next/font/google';
const josefin = Josefin_Sans({ weight: '300', preload: false });

export default function Home({ ...props }) {
	return (
		<>
			<Hero />
			<About />
			<Products />
		</>
	);
}
