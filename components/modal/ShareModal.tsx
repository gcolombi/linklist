import { useCallback, useMemo, useRef } from 'react';
import useModalContext from '@/context/modalContext';
import Modal from './Modal';
import Close from '../icons/Close';
import FacebookAlt from '../icons/share/FacebookAlt';
import Chevron from '../icons/Chevron';

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
            <div className="relative bg-white rounded-t-2xl w-full max-w-[384px] py-6 px-2 max-h-full overflow-y-auto font-semibold" data-modal>
                <div className="relative text-center">
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
                <div className="mt-10 mb-4" data-modal-content>
                    <ul>
                        <li>
                            <a className="flex items-center p-4 rounded-lg hover:bg-gray-200 transition-[background] duration-300" href="#">
                                <FacebookAlt />
                                <div className="flex-1 ml-4">
                                    <p>Share on Facebook</p>
                                </div>
                                <Chevron />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </Modal>
    );
};