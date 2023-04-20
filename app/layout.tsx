import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Alata } from 'next/font/google';
import StyledComponentsRegistry from '@/lib/registry';

const alata = Alata({ weight: '400', preload: false });

export const metadata = {
	title: 'Loopstudios',
	description: 'Generated by create next app',
	icons: {
		icon: '/images/favicon.ico',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<StyledComponentsRegistry>
				<body className={alata.className}>
					<Header />
					<main>{children}</main>
					<Footer />
				</body>
			</StyledComponentsRegistry>
		</html>
	);
}
