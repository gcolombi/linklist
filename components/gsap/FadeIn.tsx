import { Fade } from '@/lib/types';
import Animate from './Animate';

export default function FadeIn({
    children,
    durationIn = 0.2,
    delay = 0,
    ease = 'power4.out',
    watch,
    start = 'top bottom',
    end = 'bottom top',
    scrub = false,
    markers
}: Fade) {
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