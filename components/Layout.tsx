import { ReactNode } from 'react';
import Footer from './Footer';

export default function Layout({
    children
}: {
    children: ReactNode;
}) {
    return (
        <main id="content" className="flex flex-col justify-between min-h-screen">
            {children}
            <Footer />
        </main>
    );
}