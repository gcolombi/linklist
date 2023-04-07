import { ReactNode } from 'react';

export default function Layout({
    children
}: {
    children: ReactNode;
}) {
    return (
        <main id="content" className="min-h-screen">
            {children}
        </main>
    );
}