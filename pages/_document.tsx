import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="" />
                <link rel="icon" type="image/png" sizes="32x32" href="" />
                <link rel="icon" type="image/png" sizes="16x16" href="" />
                <link rel="manifest" href="" />
                <link rel="mask-icon" href="" color="#38affc" />
                <link rel="shortcut icon" href="" />
                <meta name="msapplication-TileColor" content="#38affc" />
                <meta name="msapplication-config" content="" />
                <meta name="theme-color" content="#ffffff" />
            </Head>
            <body className="bg-black">
                <a href="#content" className="sr-only">Skip to content</a>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}