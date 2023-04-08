/* Links List */
export type LinksListHeader = {
    avatar: string;
    name: string;
}

export type LinksList = {
    links: ListItem[];
}

export type ListItem = {
    title: string;
    href: string;
    image?: string;
}