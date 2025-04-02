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
            </Head>
            <body style={{ margin: '0', height: '100%', minHeight: '100vh' }}>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
