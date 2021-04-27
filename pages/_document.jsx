import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';
import React from 'react';

class PortfolioDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <meta name="description" content="Yazan Tarifi Personal Website (Android Developer) Portfolio" />
          <meta name="keywords" content="portfolio, personal website, developer, mobile developer, frontend developer, android Developer Portfolio" />
          <meta name="author" content="Yazan Tarifi" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="canonical" href="https://yazantarifi.com/" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://yazantarifi.com/" />
          <meta property="og:site_name" content="Yazan Tarifi - Android Developer" />
          <meta property="og:image" content="https://yazantarifi.com/big_header.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta name="google-site-verification" content="sjhqZiHtHmbZA-n6PrKgrUHdEluHo4BTHx3lX9pNvT0" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default PortfolioDocument;
