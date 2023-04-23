export default function Hero() {
	return (
		<section className='w-screen h-[100vh] md:h-[560px]'>
			<div className=' background-image relative w-full h-full -z-[1]'>
				<div className='container'>
					<div className='flex items-center h-full'>
						<h1 className='p-8 border border-white  text-5xl md:text-6xl uppercase text-white w-full md:w-5/12'>
							Immersive experiences that deliver
						</h1>
					</div>
				</div>
				{/* <Image
					src='/images/desktop/image-hero.jpg'
					alt='image hero'
					sizes='(max-width: 1440px) 100vw,
      (max-width: 1200px) 50vw,
      33vw'
					objectFit='cover'
					layout='fill'
				></Image> */}
			</div>
		</section>
	);
}
