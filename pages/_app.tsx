import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { TopBarContextProvider } from '@/context/topBarContext';
import { ModalContextProvider } from '@/context/modalContext';
import Layout from '@/components/Layout';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <TopBarContextProvider>
            <ModalContextProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ModalContextProvider>
        </TopBarContextProvider>
    );
}