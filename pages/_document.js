import Document, { Html, Head, Main, NextScript } from 'next/document';
import { resetId } from 'react-id-generator';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    resetId();
    library.add(fab, fas, far);

    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en" className="text-base font-sans">
        <Head />
        <body>
          <Header />
          <Main />
          <Footer />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
