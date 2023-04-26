import Head from 'next/head';
import Header from './Header';
import Sidebar from './Sidebar';

interface Props {
	children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
	return (
		<div className="min-h-screen flex bg-white">
			<Head>
				<title>Mainstack Dashboard</title>
				<meta name="description" content="Customer's dashboard on Mainstack" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<nav className="w-[302px] h-[900px] flex-none border-r">
				<Sidebar />
			</nav>

			<main className="flex-1 min-w-0 overflow-auto ...">
				<Header title="Dashboard" />
				{children}
			</main>
		</div>
	);
};

export default Layout;
