import { SocialMediaItem, SocialMedias } from '@/lib/types';
import SocialMediasListItem from './SocialMediasListItem';
import TranslateIn from './gsap/TranslateIn';

export default function SocialMediasList({
    socialMedias
}: {
    socialMedias: SocialMedias;
}) {
    return (
        <div className="mt-6">
            <div className="flex justify-center items-center flex-wrap">
                {socialMedias.map((socialMedia: SocialMediaItem, i) => (
                    <TranslateIn
                        key={socialMedia.href}
                        delay={0.3 + i / 10}
                        y="100%"
                        start="-100% bottom"
                        end="top top"
                        watch
                    >
                        <SocialMediasListItem
                            {...socialMedia}
                        />
                    </TranslateIn>
                ))}
            </div>
        </div>
    );
};
