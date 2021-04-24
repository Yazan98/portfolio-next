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
          <title>Yazan Tarifi - Portfolio</title>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <meta name="description" content="Personal Website Created to Show My Projects" />
          <meta name="keywords" content="portfolio, personal website, developer, mobile developer, frontend developer" />
          <meta name="author" content="Yazan98" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
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
