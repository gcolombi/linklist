import { Link } from '@/lib/types';
import gsap from 'gsap';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import useModalContext from '@/context/modalContext';
import useWindowLocation from '@/hooks/useWindowLocation';
import useWindowSize from '@/hooks/useWindowSize';
import useCopyToClipboard from '@/hooks/useCopyToClipboard';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import Modal from './Modal';
import Close from '../icons/Close';
import Chevron from '../icons/Chevron';
import FacebookAlt from '../icons/share/FacebookAlt';
import LinkedIn from '../icons/share/LinkedIn';
import TwitterAlt from '../icons/share/TwitterAlt';
import WhatsApp from '../icons/share/WhatsApp';
import Messenger from '../icons/share/Messenger';
import Email from '../icons/share/Email';
import Logo from '../icons/Logo';
import Share from '../icons/share/Share';
import classNames from 'classnames';

export default function useShareModal() {
    const { open, hasNativeSupport, link, setModal } = useModalContext();

    const ShareModalCallback = useCallback(({
        name,
        title
    }: {
        name: string;
        title: string;
    }) => {
        return (
            <ShareModal
                name={name}
                title={title}
                link={link}
                showModal={open}
                hasNativeSupport={hasNativeSupport}
                setModal={setModal}
            />
        );
    }, [open, hasNativeSupport, link, setModal]);

    return useMemo(() => ({
        ShareModal: ShareModalCallback
    }), [ShareModalCallback]);
}

function ShareModal({
    name,
    title,
    link,
    showModal,
    hasNativeSupport,
    setModal
}: {
    name: string;
    title: string;
    link: Link;
    showModal: boolean;
    hasNativeSupport: boolean;
    setModal: (state: boolean, link?: Link, isTopBar?: boolean) => void;
}) {
    const { windowSize } = useWindowSize();
    const [value, copy] = useCopyToClipboard();
    const [isCopying, setIsCopying] = useState(false);
    const modalRef = useRef<HTMLDivElement | null>(null);
    const timeline = useRef<GSAPTimeline | null>(null);
    const { currentURL } = useWindowLocation();
    const url = link?.id ? `${currentURL.split('?')[0]}?share_link=${link?.id}` : link?.href;

    const copyHandler = () => {
        copy(url ?? '');
        setIsCopying(true);
    };

    useEffect(() => {
        if (isCopying) {
            const timer = setTimeout(() => {
                setIsCopying(false);
            }, 1000);

            return  () => clearTimeout(timer);
        }
    }, [isCopying]);

    useIsomorphicLayoutEffect(() => {
        if (!showModal) {
            return;
        }

        const ctx = gsap.context(() => {
            if (hasNativeSupport && window.innerWidth <= 640) {
                timeline.current = gsap
                .timeline({
                    defaults: {
                        ease: 'power4.out'
                    }
                })
                .to(modalRef.current, {
                    opacity: 1,
                    pointerEvents: 'all',
                    duration: 0.3
                })
                .to('[data-modal]', {
                    y: 0,
                    duration: 0.3
                })
                .reverse();
            } else {
                timeline.current = gsap
                .timeline({
                    defaults: {
                        ease: 'sine.out'
                    }
                })
                .to(modalRef.current, {
                    opacity: 1,
                    pointerEvents: 'all',
                    duration: 0.3
                })
                .to('[data-modal]', {
                    opacity: 1,
                    scale: 1,
                    duration: 0.3
                })
                .reverse();
            }
        }, modalRef);

        return () => ctx.revert();
    }, []);

    useIsomorphicLayoutEffect(() => {
        timeline.current?.reversed(!showModal);
    }, []);

    return (
        <Modal showModal={showModal} setModal={setModal} ref={modalRef}>
            {hasNativeSupport && typeof windowSize.width === 'number' && windowSize.width <= 640 ? (
                <div className="relative bg-white rounded-t-2xl w-full max-w-[384px] p-5 max-h-full overflow-y-auto translate-y-full" data-modal>
                    <div className="relative text-center font-semibold">
                        <div className=" px-14">
                            <h2 className="">@{name}</h2>
                        </div>
                        <div className="absolute top-2/4 -translate-y-2/4 right-2">
                            <button
                                className="flex justify-center items-center w-8 h-8 rounded-lg hover:bg-gray-200 transition-[background] duration-300"
                                onClick={() => setModal(false)}
                            >
                                <Close />
                            </button>
                        </div>
                    </div>
                    <div className="mt-5 font-semibold">
                        <button
                            className="flex w-full items-center py-4"
                            onClick={() => setModal(true, link)}
                        >
                            <div className="mr-5">
                                <Share />
                            </div>
                            <div>
                                <p>{title}</p>
                            </div>
                            <div className="ml-auto">
                                <Chevron />
                            </div>
                        </button>
                    </div>
                </div>
            ) : (  <div className="relative bg-white rounded-t-2xl w-full max-w-[384px] py-6 px-2 max-h-full overflow-y-auto sm:rounded-b-2xl opacity-0 scale-0" data-modal>
                    <div className="relative text-center font-semibold">
                        <div className=" px-14">
                            <h2 className="">{title}</h2>
                        </div>
                        <div className="absolute top-2/4 -translate-y-2/4 right-2">
                            <button
                                className="flex justify-center items-center w-8 h-8 rounded-lg hover:bg-gray-200 transition-[background] duration-300"
                                onClick={() => setModal(false)}
                            >
                                <Close />
                            </button>
                        </div>
                    </div>
                    <div className="mt-10 mb-4 font-semibold">
                        <ul>
                            <li>
                                <a
                                    href={`https://www.facebook.com/sharer.php?u=${url}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center p-4 rounded-lg hover:bg-gray-200 transition-[background] duration-300"
                                >
                                    <FacebookAlt />
                                    <div className="flex-1 mx-4">
                                        <p>Share on Facebook</p>
                                    </div>
                                    <Chevron />
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center p-4 rounded-lg hover:bg-gray-200 transition-[background] duration-300"
                                >
                                    <LinkedIn />
                                    <div className="flex-1 mx-4">
                                        <p>Share on LinkedIn</p>
                                    </div>
                                    <Chevron />
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`https://twitter.com/intent/tweet?text=${link?.title} - ${url}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center p-4 rounded-lg hover:bg-gray-200 transition-[background] duration-300"
                                >
                                    <TwitterAlt />
                                    <div className="flex-1 mx-4">
                                        <p>Share on Twitter</p>
                                    </div>
                                    <Chevron />
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`https://wa.me/?text=${link?.title} - ${url}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center p-4 rounded-lg hover:bg-gray-200 transition-[background] duration-300"
                                >
                                    <WhatsApp />
                                    <div className="flex-1 mx-4">
                                        <p>Share via WhatsApp</p>
                                    </div>
                                    <Chevron />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.messenger.com/new"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center p-4 rounded-lg hover:bg-gray-200 transition-[background] duration-300"
                                >
                                    <Messenger />
                                    <div className="flex-1 mx-4">
                                        <p>Share via Messenger</p>
                                    </div>
                                    <Chevron />
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`mailto:?subject=Check out this Linklist! &body=${link?.title} - ${url}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center p-4 rounded-lg hover:bg-gray-200 transition-[background] duration-300"
                                >
                                    <Email />
                                    <div className="flex-1 mx-4">
                                        <p>Share via Email</p>
                                    </div>
                                    <Chevron />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="px-4">
                        <button
                            className="w-full py-[17px] pl-3 border-solid border border-gray-300 rounded-lg hover:bg-gray-200 transition-[background] duration-300"
                            onClick={copyHandler}
                        >
                            <div className="flex items-center">
                                <div className="text-[#43E660]">
                                    <Logo />
                                </div>
                                <div className="pl-4 text-left flex-1 min-w-0">
                                    <p className="whitespace-nowrap overflow-hidden text-ellipsis">{url}</p>
                                </div>
                                <div
                                    className={classNames(
                                        'w-[76px] whitespace-nowrap',
                                        {
                                            ' text-green-800': isCopying
                                        }
                                    )}
                                >
                                    <p>{isCopying ? 'Copied!' : 'Copy'}</p>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            )}
        </Modal>
    );
};