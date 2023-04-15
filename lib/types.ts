/* Links List */
export type ListHeader = {
    avatar: string;
    name: string;
}

export type List = {
    links: ListItem[];
}

export type ListItem = {
    title: string;
    href: string;
    image?: string;
}

/* Social Medias */
export type SocialMedias = {
    socialMedias: SocialMediaItem[];
}

export type SocialMediaItem = {
    title: string;
    href: string;
    component: string;
}

/* Modal */
export type Link = {
    title: string;
    href: string;
} | undefined