import Facebook from './Facebook';
import Twitter from './Twitter';
import Instagram from './Instagram';
import TikTok from './TikTok';
import Spotify from './Spotify';
import YouTube from './YouTube';


type IconComponent = ({className}: {
    className?: string | undefined
}) => JSX.Element;

type Icon = {
    [key: string]: IconComponent
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
    component,
    className
}: {
    component: string;
    className?: string | undefined;
}): JSX.Element {
    const Component = Icons[component];

    return (
        <>
            {Component &&
                <Component className={className} />
            }
        </>
    );
};