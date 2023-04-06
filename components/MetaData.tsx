import Head from 'next/head';
import useWindowLocation from '@/hooks/useWindowLocation';

export default function MetaData() {
    const { currentURL } = useWindowLocation();
    return (
        <Head>
            <meta charSet="utf-8" />
        	<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>{''}</title>
            <meta name="description" content={''} />
            <meta property="og:title" content={''} />
            <meta property="og:description" content={''} />
            <meta property="og:url" content={currentURL} />
            <meta property="og:site_name" content={''} />
            <meta property="og:type" content={''} />
            <meta property="og:image" content={''} />
            <meta name="robots" content="follow, index" />
            <link rel="canonical" href={currentURL} />
        </Head>
    );
}