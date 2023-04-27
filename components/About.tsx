import Image from 'next/image';

export default function About() {
	return (
		<section className='pb-8 md:py-20'>
			<div className='container'>
				<div className='relative pt-24'>
					<div className='relative flex justify-center md:block md:w-[65%] md:h-[500px]'>
						<Image
							src='/images/desktop/image-interactive.jpg'
							alt='man with VR glasses on'
							fill
							// width={731}
							// height={500}
							className='hidden md:inline-block object-cover'
						></Image>
						<Image
							src='/images/mobile/image-interactive.jpg'
							alt='man with VR glasses on'
							width={654}
							height={448}
							className='md:hidden'
						></Image>
					</div>
					<div className='md:absolute md:w-2/4 pt-4 pl-4 pr-4 pb-0 md:pt-12 md:pl-12 md:pr-0 lg:pt-24 lg:pl-24 bg-white bottom-0 right-0 text-center md:text-start'>
						<h2 className=' font-sans uppercase pt-8 pb-6 md:pt-0 md:pb-8 text-4xl md:text-5xl'>
							The leader in interactive vr
						</h2>
						<p className='text-lp-gray'>
							Founded in 2011, Loopstudios has been producing world-class
							virtual reality projects for some of the best companies around the
							globe. Our award-winning creations have transformed businesses
							through digital experiences that bind to their brand.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
