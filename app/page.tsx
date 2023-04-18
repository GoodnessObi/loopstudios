import Image from 'next/image';
import { Josefin_Sans } from 'next/font/google';

const josefin = Josefin_Sans({ weight: '300', preload: false });

export default function Home() {
	return (
		<div>
			<section>
				<Image
					src='/images/desktop/image-hero.jpg'
					alt='image hero'
					sizes='(max-width: 1440px) 100vw,
          (max-width: 1200px) 50vw,
          33vw'
					width={2000}
					height={560}
				></Image>
				<h1 className={josefin.className}>
					Immersive experiences that deliver
				</h1>
			</section>
			<section>
				<div></div>
				<div>
					<h2>The leader in interactive vr</h2>
					<p>
						Founded in 2011, Loopstudios has been producing world-class virtual
						reality projects for some of the best companies around the globe.
						Our award-winning creations have transformed businesses through
						digital experiences that bind to their brand
					</p>
				</div>
			</section>
			<section>
				<h2>Our creations</h2>
				<button>See All</button>
				<div></div>
			</section>
		</div>
	);
}
