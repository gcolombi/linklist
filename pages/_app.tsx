import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { TopBarContextProvider } from '@/context/topBarContext';
import Layout from '@/components/Layout';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <TopBarContextProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </TopBarContextProvider>
    );
}