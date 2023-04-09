import data from '../data.json';
import MetaData from '@/components/MetaData';
import LinksListHeader from '@/components/LinksListHeader';
import LinksList from '@/components/LinksList';
import SocialMediasList from '@/components/SocialMediasList';

export default function Home() {
    return (
        <>
            <MetaData />
            <section className="pt-16">
                <div className="px-4">
                    <div className="max-w-[680px] mx-auto">
                        <LinksListHeader {...data.header} />
                        <LinksList links={data.links} />
                        <SocialMediasList socialMedias={data.socials} />
                    </div>
                </div>
            </section>
        </>
    )
}