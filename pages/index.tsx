import data from '../data.json';
import { useEffect, useState } from 'react';
import MetaData from '@/components/MetaData';
import LinksListHeader from '@/components/LinksListHeader';
import LinksList from '@/components/LinksList';
import SocialMediasList from '@/components/SocialMediasList';
import classNames from 'classnames';

export default function Home() {
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
                        <LinksListHeader {...data.header} />
                        <LinksList links={data.links} setHasShareLink={setHasShareLink} />
                        <SocialMediasList socialMedias={data.socials} />
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