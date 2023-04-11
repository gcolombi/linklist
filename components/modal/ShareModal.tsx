import { useState, useCallback, useMemo, useRef } from 'react';
import useModalContext from '@/context/modalContext';
import Modal from './Modal';

export default function useShareModal() {
    const { open, setModal } = useModalContext();
    // const [showShareModal, setShowShareModal] = useState(false);

    // const setModal = useCallback((state: boolean) => {
    //     setShowShareModal(state);
    // }, [setShowShareModal]);

    const ShareModalCallback = useCallback(({title, content}: {title: string, content: string}) => {
        console.log(open);
        return (
            <ShareModal
                title={title}
                content={content}
                showShareModal={open}
                setModal={setModal}
            />
        );
    }, [open, setModal]);

    // return useMemo(() => ({
    //     setModal, ShareModal: ShareModalCallback
    // }), [setModal, ShareModalCallback]);

    return useMemo(() => ({
        ShareModal: ShareModalCallback
    }), [ShareModalCallback]);
}

function ShareModal({
    title,
    content,
    showShareModal,
    setModal
}: {
    title: string;
    content: string;
    showShareModal: boolean;
    setModal: (state: boolean) => void;
}) {
    const modalRef = useRef<HTMLDivElement>(null);

    return (
        <Modal showModal={showShareModal} setModal={setModal} ref={modalRef}>
            <div className="relative bg-white rounded-t-2xl max-w-[384px]:" data-modal>
                <button
                    className=""
                    onClick={() => setModal(false) }
                    data-modal-close
                />
                <div className="" data-modal-content>
                    <h2>{title}</h2>
                    <div className="o-wysiwyg">
                        <p>{content}</p>
                    </div>
                </div>
            </div>
        </Modal>
    );
};