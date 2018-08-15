import Document, { Head, Main, NextScript } from 'next/document'

const assetPrefix = process.env.NODE_ENV === 'production' ? '/zeus' : ''

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <link href="https://cdn.bootcss.com/highlight.js/9.12.0/styles/github.min.css" rel="stylesheet" />
          <link href={`${assetPrefix}/static/style.css`} rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
