import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html style={{ height: '100%' }}>
            <Head>
                <link
                    rel="preload"
                    href="/fonts/NewRocker-Regular.ttf"
                    as="font"
                    type="font/ttf"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    href="/fonts/Roboto-Regular.ttf"
                    as="font"
                    type="font/ttf"
                    crossOrigin="anonymous"
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="preconnect" href="https://i.ytimg.com" />
                <link rel="dns-prefetch" href="https://www.youtube.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@400;500;600&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body style={{ margin: '0', height: '100%', minHeight: '100vh' }}>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
