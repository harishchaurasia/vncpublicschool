import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=New+Rocker&display=swap" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet"></link>
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