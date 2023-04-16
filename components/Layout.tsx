import { ReactNode } from 'react';
import TopBar from './TopBar';
import Footer from './Footer';
import useShareModal from './modal/ShareModal';
import classNames from 'classnames';

export default function Layout({
    children,
    className
}: {
    children: ReactNode;
    className: string
}) {
    const { ShareModal } = useShareModal();

    return (
        <>
            <div className={classNames(className, 'font-primary')}>
                <TopBar />
                <div className="u-radialGradient" />
                <main id="content" className="flex flex-col justify-between min-h-screen relative">
                    {children}
                    <Footer />
                </main>
                <ShareModal name="John Doe" title="Share this Linklist" />
            </div>
        </>
    );
}