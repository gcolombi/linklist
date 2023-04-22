import { ReactNode } from 'react';
import Animate from './Animate';

type Fade = {
    children: ReactNode,
    durationIn?: number,
    delay?: number,
    ease?: string;
    watch?: boolean,
    start?: string,
    end?: string,
    scrub?: boolean,
    markers?: boolean
}

export default function FadeIn({
    children,
    durationIn = 0.5,
    delay = 0,
    ease = 'power4.out',
    watch,
    start = 'top bottom',
    end = 'bottom top',
    scrub = false,
    markers
}: Fade ) {

    return (
        <Animate
            durationIn={durationIn}
            delay={delay}
            from={{
                opacity: 0
            }}
            to={{
                ease,
                opacity: 1
            }}
            watch={watch}
            start={start}
            end={end}
            scrub={scrub}
            markers={markers}
        >
            {children}
        </Animate>
    );
}