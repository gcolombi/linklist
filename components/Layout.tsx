import { ReactNode } from 'react';

export default function Layout({
    children
}: {
    children: ReactNode;
}) {
    return (
        <main id="content">
            {children}
        </main>
    );
}