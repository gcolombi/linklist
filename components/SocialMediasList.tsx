import { SocialMediaItem, SocialMedias } from '@/lib/types';
import SocialMediasListItem from './SocialMediasListItem';

export default function SocialMediasList({
    socialMedias
}: {
    socialMedias: SocialMedias;
}) {
    return (
        <div className="mt-6">
            <div className="flex justify-center items-center flex-wrap">
                {socialMedias.map((socialMedia: SocialMediaItem) => (
                    <SocialMediasListItem {...socialMedia} key={socialMedia.href} />
                ))}
            </div>
        </div>
    );
};
