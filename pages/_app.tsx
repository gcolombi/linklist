import data from '@/data.json';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { TopBarContextProvider } from '@/context/topBarContext';
import { ModalContextProvider } from '@/context/modalContext';
import Layout from '@/components/Layout';
import { Space_Mono, Inter } from 'next/font/google';
import classNames from 'classnames';

const spaceMono = Space_Mono({
    fallback: ['sans-serif'],
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-spaceMono'
});

const inter = Inter({
    fallback: ['sans-serif'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter'
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <TopBarContextProvider>
            <ModalContextProvider>
                <Layout className={classNames(spaceMono.variable, inter.variable)} header={data.header}>
                    <Component {...pageProps} {...data} />
                </Layout>
            </ModalContextProvider>
        </TopBarContextProvider>
    );
}