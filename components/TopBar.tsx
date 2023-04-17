import { ListHeader } from '@/lib/types';
import useTopBarContext from '@/context/topBarContext';
import useWindowSize from '@/hooks/useWindowSize';
import useModalContext from '@/context/modalContext';
import useWindowLocation from '@/hooks/useWindowLocation';
import Image from 'next/image';
import Dots from './icons/Dots';
import Share from './icons/share/Share';
import classNames from 'classnames';

export default function TopBar({
    name,
    avatar
}: ListHeader ) {
    const { setRef, sticky } = useTopBarContext();
    const { windowSize } = useWindowSize();
    const { setModal } = useModalContext();
    const { currentURL } = useWindowLocation();
    const link = {
        title: 'Check out this Linklist!',
        href: currentURL.split('?')[0]
    };

    return (
        <header
            className={classNames(
                'fixed top-0 left-0 right-0 z-[1000] w-[calc(100%-24px)] py-2 sm:py-3 px-3 grid items-center grid-cols-[1fr_auto_1fr] max-w-[788px] my-2 sm:my-3 mx-auto rounded-[72px] border-solid border transition-[background]',
                {
                    'bg-transparent border-transparent': !sticky,
                    'bg-white/50 border-[rgb(235, 238, 241)] backdrop-blur-md': sticky
                }
            )}
            ref={(el) => setRef(el)}
        >
            <div
                className={classNames(
                    'opacity-0',
                    {
                        'opacity-100': sticky
                    }
                )}
            >
                <Image
                    className="w-11 h-11 object-contain rounded-full"
                    alt={name}
                    src={avatar}
                    width={44}
                    height={44}
                />
            </div>
            <div
                className={classNames(
                    'opacity-0',
                    {
                        'opacity-100': sticky
                    }
                )}
            >
                <span className="block font-bold">@{name}</span>
            </div>
            <button
                className={classNames(
                    'flex justify-center items-center w-10 h-10 rounded-full justify-self-end border-solid border border-black/10 transition-[background] duration-300',
                    {
                        'bg-white/80 text-black hover:bg-white/70': !sticky,
                        'bg-black text-white hover:bg-black/75': sticky
                    }
                )}
                title="Share"
                onClick={() => setModal(true, link, true)}
            >
                {typeof windowSize.width === 'number' && windowSize.width <= 640 ? (
                    <Dots />
                ) : (
                    <Share />
                )}
            </button>
        </header>
    );
};