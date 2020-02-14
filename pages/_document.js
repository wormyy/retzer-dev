import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-158622168-1"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: ` window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-158622168-1');`
            }}
          ></script>

          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
