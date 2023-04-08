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