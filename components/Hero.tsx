'use client';
import styled from 'styled-components';
import Image from 'next/image';
import { Josefin_Sans } from 'next/font/google';

const josefin = Josefin_Sans({ weight: '300', preload: false });

const Wrapper = styled.div`
	width: 77%;
	margin: 0 auto;
	height: 100%;
`;

const HeroSection = styled.section`
	height: 560px;
	width: 100vw;
	position: relative;
	z-index: -1;
`;

const TitleOne = styled.h1`
	position: relative;
	border: 1px solid white;
	color: #fff;
	text-transform: uppercase;
	font-size: 4rem;
	padding: 2rem;
	width: 57%;
`;

const FlexWrapper = styled.div`
	display: flex;
	align-items: center;
	height: 100%;
`;

export default function Hero() {
	return (
		<HeroSection>
			<Image
				src='/images/desktop/image-hero.jpg'
				alt='image hero'
				sizes='(max-width: 1440px) 100vw,
      (max-width: 1200px) 50vw,
      33vw'
				objectFit='cover'
				layout='fill'
			></Image>
			<Wrapper>
				<FlexWrapper>
					<TitleOne className={josefin.className}>
						Immersive experiences that deliver
					</TitleOne>
				</FlexWrapper>
			</Wrapper>
		</HeroSection>
	);
}
