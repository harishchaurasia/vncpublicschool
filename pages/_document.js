import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=New+Rocker&display=swap" rel="stylesheet" />
            </Head>
            <body style={bodyStyle}>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}


const bodyStyle = {
margin: '0'
};