import { useCallback, useMemo, useRef } from 'react';
import useModalContext from '@/context/modalContext';
import Modal from './Modal';

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