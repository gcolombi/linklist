import { ListHeader } from '@/lib/types';
import { ReactNode } from 'react';
import TopBar from './TopBar';
import Footer from './Footer';
import useShareModal from './modal/ShareModal';
import classNames from 'classnames';

export default function Layout({
    children,
    className,
    header
}: {
    children: ReactNode;
    className: string;
    header: ListHeader;
}) {
    const { ShareModal } = useShareModal();

    return (
        <>
            <div className={classNames(className, 'font-primary')}>
                <TopBar name={header.name} avatar={header.avatar} />
                <main id="content" className="relative flex flex-col justify-between min-h-screen">
                    <div className="u-radialGradient xl:fixed" />
                    {children}
                    <Footer />
                </main>
                <ShareModal name={header.name} title="Share this Linklist" />
            </div>
        </>
    );
}