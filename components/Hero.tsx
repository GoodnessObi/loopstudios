export default function Hero() {
	return (
		<section className='w-screen min-h-[667px] h-[100vh] md:h-[650px] relative'>
			<div className=' background-image w-full h-full'></div>
			<div className='absolute left-0 right-0 ml-auto mr-auto bottom-[35vh] md:bottom-[140px]'>
				<div className='container'>
					<div className='flex items-center h-full'>
						<h1 className='font-sans font-light p-6 md:p-9 border-2 border-white text-[40px] md:text-7xl uppercase text-white w-full lg:w-4/5 xl:md:w-3/5 max-w-3xl tracking-wide leading-none'>
							Immersive experiences that deliver
						</h1>
					</div>
				</div>
			</div>
		</section>
	);
}
