import { useCallback, useMemo, useRef } from 'react';
import useModalContext from '@/context/modalContext';
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

export default function useShareModal() {
    const { open, setModal } = useModalContext();

    const ShareModalCallback = useCallback(({
        title,
        content
    }: {
        title: string,
        content: string
    }) => {
        return (
            <ShareModal
                title={title}
                content={content}
                showModal={open}
                setModal={setModal}
            />
        );
    }, [open, setModal]);

    return useMemo(() => ({
        ShareModal: ShareModalCallback
    }), [ShareModalCallback]);
}

function ShareModal({
    title,
    content,
    showModal,
    setModal
}: {
    title: string;
    content: string;
    showModal: boolean;
    setModal: (state: boolean) => void;
}) {
    const modalRef = useRef<HTMLDivElement>(null);

    return (
        <Modal showModal={showModal} setModal={setModal} ref={modalRef}>
            <div className="relative bg-white rounded-t-2xl w-full max-w-[384px] py-6 px-2 max-h-full overflow-y-auto sm:rounded-b-2xl" data-modal>
                <div className="relative text-center font-semibold">
                    <div className=" px-14">
                        <h2 className="">{title}</h2>
                    </div>
                    <div className="absolute top-2/4 -translate-y-2/4 right-2">
                        <button
                            className="flex justify-center items-center w-8 h-8 rounded-lg hover:bg-gray-200 transition-[background] duration-300"
                            onClick={() => setModal(false) }
                            data-modal-close
                        >
                            <Close />
                        </button>
                    </div>
                </div>
                <div className="mt-10 mb-4 font-semibold" data-modal-content>
                    <ul>
                        <li>
                            <a
                                href="https://www.facebook.com/sharer.php?u="
                                target="_blank"
                                className="flex items-center p-4 rounded-lg hover:bg-gray-200 transition-[background] duration-300"
                            >
                                <FacebookAlt />
                                <div className="flex-1 ml-4">
                                    <p>Share on Facebook</p>
                                </div>
                                <Chevron />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/sharing/share-offsite/?url="
                                target="_blank"
                                className="flex items-center p-4 rounded-lg hover:bg-gray-200 transition-[background] duration-300"
                            >
                                <LinkedIn />
                                <div className="flex-1 ml-4">
                                    <p>Share on LinkedIn</p>
                                </div>
                                <Chevron />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://twitter.com/intent/tweet?text=Check out this Linktree! - "
                                target="_blank"
                                className="flex items-center p-4 rounded-lg hover:bg-gray-200 transition-[background] duration-300"
                            >
                                <TwitterAlt />
                                <div className="flex-1 ml-4">
                                    <p>Share on Twitter</p>
                                </div>
                                <Chevron />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://wa.me/?text=Check out this Linktree! - "
                                target="_blank"
                                className="flex items-center p-4 rounded-lg hover:bg-gray-200 transition-[background] duration-300"
                            >
                                <WhatsApp />
                                <div className="flex-1 ml-4">
                                    <p>Share via WhatsApp</p>
                                </div>
                                <Chevron />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.messenger.com/new"
                                target="_blank"
                                className="flex items-center p-4 rounded-lg hover:bg-gray-200 transition-[background] duration-300"
                            >
                                <Messenger />
                                <div className="flex-1 ml-4">
                                    <p>Share via Messenger</p>
                                </div>
                                <Chevron />
                            </a>
                        </li>
                        <li>
                            <a
                                href="mailto:?subject= Check out this Linktree! &body= Check out this Linktree! - "
                                target="_blank"
                                className="flex items-center p-4 rounded-lg hover:bg-gray-200 transition-[background] duration-300"
                            >
                                <Email />
                                <div className="flex-1 ml-4">
                                    <p>Share via Email</p>
                                </div>
                                <Chevron />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="px-4">
                    <button className="w-full py-[17px] pl-3 border-solid border border-gray-300 rounded-lg hover:bg-gray-200 transition-[background] duration-300">
                        <div className="flex items-center">
                            <div className="flex items-center flex-1">
                                <div className="text-[#43E660]">
                                    <Logo />
                                </div>
                                <div className="pl-4">
                                    <p>linktr.ee/gcolombi?u...</p>
                                </div>
                            </div>
                            <div className="w-[76px]">
                                <p>Copy</p>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </Modal>
    );
};