import { List, ListHeader, SocialMedias } from '@/lib/types';
import { useEffect, useState } from 'react';
import MetaData from '@/components/MetaData';
import LinksListHeader from '@/components/LinksListHeader';
import LinksList from '@/components/LinksList';
import SocialMediasList from '@/components/SocialMediasList';
import classNames from 'classnames';

export default function Home({
    header,
    links,
    socials
}: {
    header: ListHeader;
    links: List;
    socials: SocialMedias;
}) {
    const [hasShareLink, setHasShareLink] = useState<boolean>(false);

    useEffect(() => {
        if (hasShareLink) {
            const timer = setTimeout(() => {
                setHasShareLink(false);
            }, 2000);

            return  () => clearTimeout(timer);
        }
    }, [hasShareLink]);

    return (
        <>
            <MetaData />
            <section className="pt-16">
                <div className="px-4">
                    <div className="max-w-[680px] mx-auto">
                        <LinksListHeader {...header} />
                        <LinksList links={links} setHasShareLink={setHasShareLink} />
                        <SocialMediasList socialMedias={socials} />
                    </div>
                </div>
            </section>
            <div
                className={classNames(
                    'absolute top-0 left-0 z-[2000] w-full h-full transition-[background] duration-500',
                    {
                        'bg-transparent pointer-events-none': !hasShareLink,
                        'bg-black/80': hasShareLink
                    }
                )}
            />
        </>
    )
}