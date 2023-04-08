import Image from 'next/image';
import data from '../data.json';
import MetaData from '@/components/MetaData';
import Share from '@/components/icons/Share';
import Icon from '@/components/icons/socialMedias';
import React from 'react';

type Item = {
    title: string;
    href: string;
    image?: string;
}

function ListItem({
    title,
    href,
    image
}: Item ) {
    return (
        <li className="relative group [&:not(:last-child)]:mb-4 hover:scale-105 transition-all rounded bg-white/80 text-black">
            <a
                href={href}
                className="relative block py-4 px-16 text-center"
            >
                {image &&
                    <div className="absolute top-1/2 left-1 -translate-y-1/2 w-12 h-12">
                        <Image
                            className="rounded"
                            alt={title}
                            src={image}
                            width={48}
                            height={48}
                        />
                    </div>
                }
                <h2 className="font-medium">{title}</h2>
            </a>
            <button className="flex justify-center items-center absolute top-1/2 right-2 -translate-y-1/2 w-10 h-10 rounded-full hover:bg-black/20 group-hover:opacity-100 opacity-0 transition-all">
                <Share />
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

                        {data.links.length !== 0 &&
                            <ul className="mt-8">
                                {data.links.map((link: Item) => (
                                    <ListItem key={link.href} {...link} />
                                ))}
                            </ul>
                        }

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