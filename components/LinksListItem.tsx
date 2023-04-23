import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { ListItemType } from '@/lib/types';
import useModalContext from '@/context/modalContext';
import { useEffect, useRef, useState } from 'react';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import Image from 'next/image';
import Share from '@/components/icons/share/Share';
import classNames from 'classnames';

export default function LinksListItem({
    item,
    setHasShareLink,
    durationIn = 0.5,
    delay = 0,
    ease = 'power4.out',
    watch,
    start = 'top bottom',
    end = 'bottom top',
    scrub = false,
    markers
}: ListItemType) {
    const { setModal } = useModalContext();
    const itemRef = useRef<HTMLLIElement | null>(null);
    const element = useRef<HTMLDivElement | null>(null);
    const [isShared, setIsShared] = useState<boolean>(false);
    const from = {
        opacity: 0,
        transform: `translate(0, 100%)`
    };

    useEffect(() => {
        const url = new URL(window.location.href);
        const searchParams = url.searchParams.get('share_link');

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

    useIsomorphicLayoutEffect(() => {
        const url = new URL(window.location.href);
        const searchParams = url.searchParams.get('share_link');

        const scrollTrigger = watch ? {
            scrollTrigger: {
                trigger: element.current,
                start,
                end,
                scrub,
                markers: markers
            }
        } : {};

        /* Checks if the parent is in viewport and not shared in order to sets delay to its start value */
        if (!ScrollTrigger.isInViewport(itemRef.current ?? '') && !searchParams) {
            delay = 0.1;
        }

        const ctx = gsap.context(() => {
            /* Intro animation */
            gsap.to(element.current, {
                ease,
                opacity: 1,
                x: 0,
                y: 0,
                delay,
                duration: durationIn,
                ...scrollTrigger
            });
        }, element);

        return () => ctx.revert();
    }, []);

    return (
        <li
            id={item.id}
            ref={itemRef}
            className={classNames(
                'relative group [&:not(:last-child)]:mb-4 text-white',
                {
                    'z-[2100]': isShared
                }
            )}
        >
            <div
                ref={element}
                className="rounded-lg border bg-slate-900/40 hover:shadow-[0_0_15px_0_rgba(186,146,255,0.4)] transition-shadow duration-300"
                style={{...from}}
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
                                className="h-full object-cover bg-white"
                                alt={item.title}
                                src={item.image}
                                width={48}
                                height={48}
                            />
                        </div>
                    }
                    <h2>{item.title}</h2>
                </a>
                <button
                    className="flex justify-center items-center absolute top-1/2 right-1 -translate-y-1/2 w-12 h-12 opacity-1 xl:opacity-0 group-hover:opacity-100 transition duration-300"
                    title="Share"
                    onClick={() => setModal(true, item)}
                >
                    <div className="flex justify-center items-center w-10 h-10 rounded-full bg-white/10 xl:bg-transparent hover:bg-white/10 transition duration-300">
                        <Share />
                    </div>
                </button>
            </div>
        </li>
    )
};