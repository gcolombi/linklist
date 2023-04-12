import useTopBarContext from '@/context/topBarContext';
import useModalContext from '@/context/modalContext';
import useWindowSize from '@/hooks/useWindowSize';
import Image from 'next/image';
import Dots from './icons/Dots';
import Share from './icons/share/Share';
import classNames from 'classnames';

export default function TopBar() {
    const { setRef, sticky } = useTopBarContext();
    const { windowSize } = useWindowSize();
    const { setModal } = useModalContext();

    return (
        <header
            className={classNames(
                'fixed top-0 left-0 right-0 z-10 w-[calc(100%-24px)] py-2 sm:py-3 px-3 grid items-center grid-cols-[1fr_auto_1fr] max-w-[788px] my-2 sm:my-3 mx-auto rounded-[72px] border-solid border transition-colors duration-300',
                {
                    'bg-transparent border-transparent': !sticky,
                    'bg-white/50 border-black/10 backdrop-blur-md': sticky
                }
            )}
            ref={(el) => setRef(el)}
        >
            <div
                className={classNames(
                    'opacity-0 transition-[opacity] duration-300',
                    {
                        'opacity-100': sticky
                    }
                )}
            >
                <Image
                    className="w-11 h-11 object-contain rounded-full"
                    alt="title"
                    src="https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500&q=80"
                    width={44}
                    height={44}
                />
            </div>
            <div
                className={classNames(
                    'opacity-0 transition-[opacity] duration-300',
                    {
                        'opacity-100': sticky
                    }
                )}
            >
                <span className="block font-semibold">@John Doe</span>
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
                onClick={() => setModal(true)}
            >
                {typeof windowSize?.width === 'number' && windowSize?.width <= 640
                    ? <Dots />
                    : <Share />
                }
            </button>
        </header>
    );
};