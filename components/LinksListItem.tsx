import { ListItem } from '@/lib/types';
import Image from 'next/image';
import Share from '@/components/icons/Share';

export default function LinksListItem({
    title,
    href,
    image
}: ListItem ) {
    return (
        <li className="relative group [&:not(:last-child)]:mb-4 hover:scale-105 transition-all rounded bg-white/80 text-black">
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block py-4 px-16 text-center"
                title={title}
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
            <button className="flex justify-center items-center absolute top-1/2 right-2 -translate-y-1/2 w-10 h-10 rounded-full opacity-0 hover:bg-black/20 group-hover:opacity-100 transition duration-300">
                <Share />
            </button>
        </li>
    )
};