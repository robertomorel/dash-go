/**
 * Funciona semelhante ao _app.tsx
 * Para fazer carregamento de elementos ou assets apenas uma vez, como por exemplo,
 * fontes usadas na aplicação.
 *
 * Semelhante à função do "public/index.html"
 *
 * <Main /> -> <div id="root"></div> -> Todo o conteúdo da aplicação será renderizado aqui
 * <NextScript /> -> Loca onde o Next irá jogar os scripts que devem ser executados
 */
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="favicon.png" type="image/png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
