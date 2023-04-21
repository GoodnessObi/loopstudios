import About from '@/components/About';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
// import { Josefin_Sans } from 'next/font/google';
// const josefin = Josefin_Sans({ weight: '300', preload: false });

export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<Products />
		</>
	);
}
