import { ReactNode } from 'react';
import TopBar from './TopBar';
import Footer from './Footer';

export default function Layout({
    children
}: {
    children: ReactNode;
}) {
    return (
        <>
            <TopBar />
            <main id="content" className="flex flex-col justify-between min-h-screen">
                {children}
                <Footer />
            </main>
        </>
    );
}