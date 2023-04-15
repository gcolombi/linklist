import { ReactNode } from 'react';
import TopBar from './TopBar';
import Footer from './Footer';
import useShareModal from './modal/ShareModal';

export default function Layout({
    children,
}: {
    children: ReactNode;
}) {
    const { ShareModal } = useShareModal();

    return (
        <>
            <TopBar />
            <main id="content" className="flex flex-col justify-between min-h-screen relative">
                {children}
                <Footer />
            </main>
            <ShareModal title="Share this Linktree" />
        </>
    );
}