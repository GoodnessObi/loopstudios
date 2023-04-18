'use client';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

const Wrapper = styled.div`
	width: 77%;
	margin: 0 auto;
`;

const NavBar = styled.nav`
	padding: 4rem 0 2rem;
	background: transparent;
	border: none;
	position: absolute;
	width: 100%;
`;

const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const NavLinks = styled.div`
	display: flex;
	justify-content: right;
	align-items: center;
`;

const NavLink = styled(Link)`
	color: hsl(0, 0%, 100%);
	margin: 0 1rem;
	position: relative;
	text-decoration: none;
	padding-bottom: 0.75rem;

	&:hover,
	&:active {
		&:after {
			display: block;
			position: absolute;
			content: '';
			background: hsl(0, 0%, 100%);
			height: 1.75px;
			width: 40%;
			bottom: 0;
			left: 0;
			right: 0;
			margin-left: auto;
			margin-right: auto;
		}
	}
`;

export default function Header() {
	return (
		<NavBar>
			<Wrapper>
				<Nav>
					<Link href='/'>
						<Image
							src='/images/logo.svg'
							alt='logo'
							width={192}
							height={32}
						></Image>
					</Link>
					<NavLinks>
						<NavLink href='#'>About</NavLink>
						<NavLink href='#'>Careers</NavLink>
						<NavLink href='#'>Events</NavLink>
						<NavLink href='#'>Products</NavLink>
						<NavLink href='#'>Support</NavLink>
					</NavLinks>
				</Nav>
			</Wrapper>
		</NavBar>
	);
}
