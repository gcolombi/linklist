/* Links List */
export type ListHeader = {
    avatar: string;
    name: string;
    content?: string;
}

export type List = ListItem[];

export type ListItem = {
    id: string;
    title: string;
    href: string;
    image?: string;
}

/* Social Medias */
export type SocialMedias = SocialMediaItem[];

export type SocialMediaItem = {
    title: string;
    href: string;
    component: string;
}

/* Modal */
export type Link = {
    id?: string;
    title: string;
    href: string;
} | undefined;