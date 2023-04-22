import { Translate } from '@/lib/types';
import Animate from './Animate';

export default function TranslateIn({
    children,
    fade = true,
    durationIn = 0.5,
    delay = 0,
    ease = 'power4.out',
    x = '0px',
    y = '0px',
    xTo = 0,
    yTo = 0,
    watch,
    start = 'top bottom',
    end = 'bottom top',
    scrub = false,
    markers
}: Translate) {
    return (
        <Animate
            durationIn={durationIn}
            delay={delay}
            from={{
                opacity: fade ? 0 : 1,
                transform: `translate(${x}, ${y})`
            }}
            to={{
                ease,
                opacity: 1,
                x: xTo,
                y: yTo
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