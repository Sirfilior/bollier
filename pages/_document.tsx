// pages/_document.js

import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Forum&family=Montserrat&family=Rufina:wght@400;700&display=optional"
            rel="stylesheet"
          />
        </Head>
        <body className="overflow-x-hidden antialiased text-slate-100 tracking-tight bg-slate-800">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
