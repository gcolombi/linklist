import { ListItem } from '@/lib/types';
import useModalContext from '@/context/modalContext';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Share from '@/components/icons/share/Share';
import classNames from 'classnames';

export default function LinksListItem({
    item,
    setHasShareLink
}: {
    item: ListItem;
    setHasShareLink: Dispatch<SetStateAction<boolean>>;
}) {
    const { setModal } = useModalContext();
    const itemRef = useRef<HTMLLIElement | null>(null);
    const [isShared, setIsShared] = useState<boolean>(false);

    useEffect(() => {
        const url = new URL(window.location.href);
        const searchParams = url.searchParams.get('link');

        if (searchParams === item.id) {
            window.scrollTo(0, (itemRef.current?.offsetTop ?? 0) - 90);
            setHasShareLink(true);
            setIsShared(true);

            const timer = setTimeout(() => {
                setIsShared(false);
            }, 2500);

            return  () => clearTimeout(timer);
        }
    }, [item.id, setHasShareLink]);

    return (
        <li
            id={item.id}
            ref={itemRef}
            className={classNames(
                'relative group [&:not(:last-child)]:mb-4 hover:scale-105 transition-all rounded bg-white/80 text-black shadow-md',
                {
                    'z-[2100]': isShared
                }
            )}
        >
            <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block py-4 px-16 text-center"
                title={item.title}
            >
                {item.image &&
                    <div className="absolute top-1/2 left-1 -translate-y-1/2 w-12 h-12 rounded overflow-hidden">
                        <Image
                            className="h-full object-cover"
                            alt={item.title}
                            src={item.image}
                            width={48}
                            height={48}
                        />
                    </div>
                }
                <h2 className="font-medium">{item.title}</h2>
            </a>
            <button
                className="flex justify-center items-center absolute top-1/2 right-2 -translate-y-1/2 w-10 h-10 rounded-full opacity-1 bg-black/20 xl:bg-transparent xl:opacity-0 hover:bg-black/20 group-hover:opacity-100 transition duration-300"
                title="Share"
                onClick={() => setModal(true, {id: item.id, title: item.title, href: item.href})}
            >
                <Share />
            </button>
        </li>
    )
};