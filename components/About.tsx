import Image from 'next/image';
// import { Josefin_Sans } from 'next/font/google';

// const josefin = Josefin_Sans({ weight: '300', preload: false });

export default function About() {
	return (
		<section className='py-20'>
			<div className='container'>
				<div className='relative pt-20'>
					<div>
						<Image
							src='/images/desktop/image-interactive.jpg'
							alt='man with VR glasses on'
							width={731}
							height={500}
							className='hidden md:inline-block'
						></Image>
						<Image
							src='/images/mobile/image-interactive.jpg'
							alt='man with VR glasses on'
							width={654}
							height={448}
							className='md:hidden'
						></Image>
					</div>
					<div className='md:absolute md:w-2/4 p-5 pb-0 bg-white bottom-0 right-0 text-center md:text-start'>
						<h2 className='uppercase pb-8 text-5xl'>
							The leader in interactive vr
						</h2>
						<p>
							Founded in 2011, Loopstudios has been producing world-class
							virtual reality projects for some of the best companies around the
							globe. Our award-winning creations have transformed businesses
							through digital experiences that bind to their brand
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
