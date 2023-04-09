import { SocialMediaItem } from "@/lib/types";
import Icon from "./icons/socialMedias";

export default function SocialMediasListItem({
    title,
    href,
    component
}: SocialMediaItem) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 hover:scale-110 transition duration-300 mt-2"
            title={title}
        >
            <Icon component={component} className="w-8 h-8 text-white" />
        </a>
    );
};
