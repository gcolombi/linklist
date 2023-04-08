import data from '../data.json';
import MetaData from '@/components/MetaData';
import Icon from '@/components/icons/socialMedias';
import LinksListHeader from '@/components/LinksListHeader';
import LinksList from '@/components/LinksList';

export default function Home() {
    return (
        <>
            <MetaData />
            <section className="pt-16">
                <div className="px-4">
                    <div className="max-w-2xl mx-auto">
                        <LinksListHeader {...data.header} />
                        <LinksList links={data.links} />

                        <div className="mt-6">
                            <div className="flex justify-center items-center flex-wrap">
                                {data.socials.map((social) => (
                                    <a href={social.href} target="_blank" rel="noopener noreferrer" className="px-2 hover:scale-110 transition duration-300 mt-2" key={social.href}>
                                        <Icon component={social.component} className="w-8 h-8 text-white" />
                                    </a>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}