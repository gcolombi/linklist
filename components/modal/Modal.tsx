import {
    Dispatch,
    ForwardedRef,
    forwardRef,
    ReactNode,
    SetStateAction,
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
                <section className="" ref={ref}>
                    <div
                        className=""
                        onClick={() => setModal(false)}
                    />
                    {children}
                </section>
            }
        </>
    );
}

export default forwardRef(Modal);