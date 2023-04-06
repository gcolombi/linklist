import Image from 'next/image';
import data from '../data.json';
import MetaData from '@/components/MetaData';

function LinkCard({
    title,
    href,
    image
}: {
    title: string;
    href: string;
    image?: string;
}) {
    return (
        <a
            href={href}
            className="p-1 w-full rounded-md hover:scale-105 transition-all bg-gray-100 mb-3"
        >
            <div className="flex items-center w-full">
                <div className="w-10 h-10">
                    {image && (
                        <Image
                            className="rounded-sm"
                            alt={title}
                            src={image}
                            width={40}
                            height={40}
                        />
                    )}
                </div>
                <h2 className="flex-grow font-semibold text-gray-700 text-center">{title}</h2>
                <div className="w-10 h-10">
                    <button className="w-full h-full"></button>
                </div>
            </div>
        </a>
    )
}

export default function Home() {
    return (
        <>
            <MetaData />
            <div>
                <div className="max-w-2xl mx-auto">
                    <div className="flex flex-col items-center pt-16">
                        <Image
                            className="rounded-full"
                            alt={data.name}
                            src={data.avatar}
                            width={96}
                            height={96}
                            priority
                        />
                        <h1 className="font-bold mt-4 mb-8 text-xl text-white">@{data.name}</h1>
                        {data.links.map((link) => (
                            <LinkCard key={link.href} {...link} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}