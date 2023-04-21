import { Link } from '@/lib/types';
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
    setModal: (state: boolean, link?: Link, isTopBar?: boolean) => void;
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
                <section className="fixed top-0 left-0 z-[2000] w-full h-full flex justify-center items-end sm:items-center font-secondary opacity-0 pointer-events-none" ref={ref}>
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