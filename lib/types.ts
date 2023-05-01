import { CSSProperties, Dispatch, ReactNode, SetStateAction } from 'react';

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

export type ListItemType = {
    item: ListItem;
    setHasShareLink: Dispatch<SetStateAction<boolean>>;
} & AnimationProperties;

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

/* Animations */
export type AnimationProperties = {
    durationIn?: number;
    delay?: number;
    ease?: string;
    watch?: boolean;
    start?: string;
    end?: string;
    scrub?: boolean;
    markers?: boolean;
}

export type Animation = {
    children: ReactNode;
    durationIn: number;
    delay: number;
    from: CSSProperties;
    to: GSAPTweenVars;
    watch: boolean | undefined;
    start: string;
    end: string;
    scrub: boolean;
    markers: boolean | undefined;
}

export type Fade = {
    children: ReactNode;
} & AnimationProperties;

export type Translate = {
    children: ReactNode;
    fade?: boolean;
    x?: string;
    y?: string;
    xTo?: number;
    yTo?: number;
} & AnimationProperties;