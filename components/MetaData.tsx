import Head from 'next/head';
import useWindowLocation from '@/hooks/useWindowLocation';

export default function MetaData({
    title = 'Linktree',
    description = 'Linktree. Make your link do more.',
    image = `${process.env.NEXT_PUBLIC_BASE_URL}/static/example.jpg`,
    type = 'profile'
}: {
    title?: string;
    description?: string;
    image?: string;
    type?: string;
}) {
    const { currentURL } = useWindowLocation();

    return (
        <Head>
            <meta charSet="utf-8" />
        	<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={currentURL} />
            <meta property="og:site_name" content={process.env.NEXT_PUBLIC_SITE_NAME} />
            <meta property="og:type" content={type} />
            <meta property="og:image" content={image} />
            <meta name="robots" content="follow, index" />
            <link rel="canonical" href={currentURL} />
        </Head>
    );
}