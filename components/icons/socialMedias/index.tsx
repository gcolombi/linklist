import { FC } from 'react';
import Facebook from './Facebook';
import Twitter from './Twitter';
import Instagram from './Instagram';
import TikTok from './TikTok';
import Spotify from './Spotify';
import YouTube from './YouTube';

type Icon = {
    [key: string]: FC
};

const Icons: Icon = {
    facebook: Facebook,
    twitter: Twitter,
    instagram: Instagram,
    tiktok: TikTok,
    spotify: Spotify,
    youtube: YouTube
}

export default function Icon({
    component
}: {
    component: string;
}) {
    const Component = Icons[component];

    return (
        <>
            {Component &&
                <Component />
            }
        </>
    );
};