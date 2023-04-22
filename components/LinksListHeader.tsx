import { ListHeader } from '@/lib/types';
import Image from 'next/image';
import FadeIn from './gsap/FadeIn';
import TranslateIn from './gsap/TranslateIn';

export default function LinksListHeader({
    avatar,
    name,
    content
}: ListHeader) {
    return (
        <div className="flex flex-col items-center">
            {avatar &&
                <FadeIn
                    delay={0.5}
                    ease="sine.in"
                >
                    <Image
                        className="w-24 h-24 object-contain rounded-full"
                        alt={name}
                        src={avatar}
                        width={96}
                        height={96}
                        priority
                    />
                </FadeIn>
            }
            <div className="mt-4 overflow-hidden">
                <TranslateIn
                    fade={false}
                    delay={0.7}
                    y="100%"
                >
                    <h1 className="font-bold text-xl text-white">@{name}</h1>
                </TranslateIn>
            </div>
            {content &&
                <div className="overflow-hidden">
                    <TranslateIn
                        fade={false}
                        delay={0.9}
                        y="100%"
                    >
                        <div className="mt-1 px-10 text-sm text-white text-center sm:text-base">
                            <p>{content}</p>
                        </div>
                    </TranslateIn>
                </div>
            }
        </div>
    );
};