import Layout from '@/layout';
import '@/styles/globals.css';
import '@/styles/Sidebar.css';
import '../../node_modules/flag-icons/css/flag-icons.min.css';
import type { AppProps } from 'next/app';
import { ContextProvider } from '@/contexts/ContextProvider';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ContextProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ContextProvider>
	);
}
