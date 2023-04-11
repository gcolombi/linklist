import {
    ForwardedRef,
    forwardRef,
    ReactNode,
    useCallback,
    useEffect
} from 'react';

function Modal({
    children,
    showModal,
    setModal
}: {
    children: ReactNode;
    showModal: boolean;
    setModal: (state: boolean) => void;
}, ref: ForwardedRef<HTMLDivElement> ) {

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape' && showModal) {
            setModal(false);
        }
    }, [showModal, setModal]);

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [onKeyDown]);

    return (
        <>
            {showModal &&
                <section className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50" ref={ref}>
                    <div
                        className="absolute top-0 left-0 w-full h-full bg-black/60"
                        onClick={() => setModal(false)}
                    />
                    {children}
                </section>
            }
        </>
    );
}

export default forwardRef(Modal);