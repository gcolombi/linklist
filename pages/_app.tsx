import data from '@/data.json';
import '@/styles/globals.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import { TopBarContextProvider } from '@/context/topBarContext';
import { ModalContextProvider } from '@/context/modalContext';
import Layout from '@/components/Layout';
import { Space_Mono, Inter } from 'next/font/google';
import classNames from 'classnames';

gsap.registerPlugin(ScrollTrigger);

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

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
}

function mainLayout(page: ReactElement) {
    return (
        <TopBarContextProvider>
            <ModalContextProvider>
                <Layout className={classNames(spaceMono.variable, inter.variable)} header={data.header}>
                    {page}
                </Layout>
            </ModalContextProvider>
        </TopBarContextProvider>
    );
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
    /* Use the layout defined at the page level, if available */
    const getLayout = Component.getLayout || mainLayout;

    return getLayout(<Component {...pageProps} {...data} className={classNames(spaceMono.variable, inter.variable)} />);
}