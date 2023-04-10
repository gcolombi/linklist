import { useState, useCallback, useMemo, useRef } from 'react';
import Modal from './Modal';

export default function useShareModal({
    title,
    content
}: {
    title: string;
    content: string;
}) {
    const [showShareModal, setShowShareModal] = useState(false);

    const setModal = useCallback((state: boolean) => {
        setShowShareModal(state);
    }, [setShowShareModal]);

    const ShareModalCallback = useCallback(() => {
        return (
            <ShareModal
                title={title}
                content={content}
                showShareModal={showShareModal}
                setModal={setModal}
            />
        );
    }, [title, content, showShareModal, setModal]);

    return useMemo(() => ({
        setModal, ShareModal: ShareModalCallback
    }), [setModal, ShareModalCallback]);
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
            <div className="" data-modal>
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