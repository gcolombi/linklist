import gsap from 'gsap';
import React, { CSSProperties, ReactNode, useRef } from 'react';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';

type Animation = {
    children: ReactNode;
    durationIn: number;
    delay: number;
    from: CSSProperties;
    to: GSAPTweenVars;
    watch: boolean | undefined;
    start: string;
    end: string;
    scrub: boolean;
    markers: boolean | undefined;
}

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
}: Animation ) {
    const element = useRef<HTMLDivElement>(null);

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