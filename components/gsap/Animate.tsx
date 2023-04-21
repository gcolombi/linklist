import gsap from 'gsap';
import React, { CSSProperties, ReactNode, useRef } from 'react';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';

type Animation = {
    children: ReactNode,
    durationIn: number,
    delay: number,
    from: CSSProperties,
    to: GSAPTweenVars,
    watch: boolean,
    start: string,
    end: string,
    scrub: boolean,
    markers: boolean
}

function Animate({
    children,
    durationIn,
    // durationOut,
    delay,
    // delayOut,
    from,
    to,
    // skipOutro,
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

            /* Outro animation */
            // if (!skipOutro) {
            //     timeline.add(
            //         gsap.to(element.current, {
            //             ...from,
            //             delay: delayOut,
            //             duration: durationOut
            //         }),
            //         0
            //     );
            // }
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