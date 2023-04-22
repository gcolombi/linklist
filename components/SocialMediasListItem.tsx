import { SocialMediaItem } from '@/lib/types';
import Icon from './icons/socialMedias';

export default function SocialMediasListItem({
    item,
    durationIn = 0.5,
    delay = 0,
    ease = 'power4.out',
    watch,
    start = 'top bottom',
    end = 'bottom top',
    scrub = false,
    markers
}: {
    item: SocialMediaItem;
    durationIn?: number;
    delay?: number;
    ease?: string;
    watch?: boolean;
    start?: string;
    end?: string;
    scrub?: boolean;
    markers?: boolean;
}) {
    return (
        <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 hover:scale-110 transition duration-300 mt-2"
            title={item.title}
        >
            <Icon component={item.component} className="w-8 h-8 text-white" />
        </a>
    );
};
