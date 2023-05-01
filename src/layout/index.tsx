import Head from 'next/head';
import Header from './Header';
import Sidebar from './Sidebar';
import ResponsiveSidebar from './ResponsiveSidebar';

interface Props {
	children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
	return (
		<div className="min-h-screen flex bg-white" id="outer-container">
			<Head>
				<title>Mainstack Dashboard</title>
				<meta name="description" content="Customer's dashboard on Mainstack" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<nav className="2xl:hidden">
				<ResponsiveSidebar
					pageWrapId={'page-wrap'}
					outerContainerId={'outer-container'}
				/>
			</nav>

			<nav className="max-2xl:hidden w-[302px] h-[900px] flex-none border-r">
				<Sidebar />
			</nav>

			<main
				className="flex-1 min-w-0 overflow-auto ml-[60px] mr-[20px] md:mr-[40px] lg:mx-[60px]"
				id="page-wrap"
			>
				<Header />
				{children}
			</main>
		</div>
	);
};

export default Layout;
