import { Animation } from '@/lib/types';
import gsap from 'gsap';
import React, { useRef } from 'react';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';

function Animate({
    children,
    durationIn,
    delay,
    from,
    to,
    watch,
    start,
    end,
    scrub,
    markers
}: Animation) {
    const element = useRef<HTMLDivElement | null>(null);

    useIsomorphicLayoutEffect(() => {
        const scrollTrigger = watch ? {
            scrollTrigger: {
                trigger: element.current,
                start,
                end,
                scrub,
                markers: markers
            }
        } : {};

        const ctx = gsap.context(() => {

            /* Intro animation */
            gsap.to(element.current, {
                ...to,
                delay,
                duration: durationIn,
                ...scrollTrigger
            });
        }, element);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={element} style={from}>
            {children}
        </div>
    )
}

export default React.memo(Animate);