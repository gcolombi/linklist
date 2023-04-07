import Image from 'next/image';
import data from '../data.json';
import MetaData from '@/components/MetaData';

function ListItem({
    title,
    href,
    image
}: {
    title: string;
    href: string;
    image?: string;
}) {
    return (
        <li className="relative w-full group [&:not(:last-child)]:mb-4 hover:scale-105 transition-all">
            <a
                href={href}
                className="relative block py-4 px-16 w-full rounded bg-gray-100"
            >
                <div className="flex items-center w-full">
                    {image && (
                        <div className="absolute top-1/2 left-1 -translate-y-1/2 w-12 h-12">
                            <Image
                                className="rounded"
                                alt={title}
                                src={image}
                                width={48}
                                height={48}
                            />
                        </div>
                    )}
                    <h2 className="flex-grow font-semibold text-gray-700 text-center">{title}</h2>
                </div>
            </a>
            <button className="absolute top-1/2 right-2 -translate-y-1/2 w-10 h-10 rounded-full hover:bg-black/20 group-hover:opacity-100 opacity-0 transition-all">
            </button>
        </li>
    )
}

export default function Home() {
    return (
        <>
            <MetaData />
            <section className="pt-16">
                <div className="px-4">
                    <div className="max-w-2xl mx-auto">

                        <div className="flex flex-col items-center">
                            <Image
                                className="rounded-full"
                                alt={data.name}
                                src={data.avatar}
                                width={96}
                                height={96}
                                priority
                            />
                            <h1 className="font-bold mt-4 text-xl text-white">@{data.name}</h1>
                        </div>

                        <ul className="flex flex-col items-center mt-8">
                            {data.links.map((link) => (
                                <ListItem key={link.href} {...link} />
                            ))}
                        </ul>

                    </div>
                </div>
            </section>
        </>
    )
}