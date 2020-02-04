/**
 * @prettier
 */

/* eslint-disable filenames/match-regex, filenames/match-exported */

import * as React from 'react';
import DocumentImport, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';
import htmlescape from 'htmlescape';
import { NextPageContext } from 'next';
import { ServerStyleSheets } from '@material-ui/styles';

import COLORS from '~/constants/colors';
import globalStyles from '~/styles/global';
import NAMES from '~/constants/names';

// choose which env variables should be available on the client
const ENV = {
  NODE_ENV: process.env.NODE_ENV,
};

// Force Next-generated DOM elements to fill their parent's height.
// Not required for using of react-native-web, but helps normalize
// layout for top-level wrapping elements.
// Disable input, textarea outline because blinking caret is enough.
const normalizeNextElements = `
  body,
  body > div:first-child,
  #__next {
    height: 100%;
  }
  body {
    background-color: ${COLORS.SCREEN_BACKGROUND} !important;
  }
  input, textarea {
    outline: none;
  }
`;

let index = 0;

// FIXME:
type Props = any;
type Context = NextPageContext & any;

class Document extends DocumentImport<Props> {
  static async getInitialProps(ctx: Context): Promise<Props> {
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render

    // Get the current URL being requested
    let url = '';
    if (ctx.req) {
      url = `https://${ctx.req.headers.host}${ctx.req.url}`;
    }

    // Render app and page and get the context of the page with collected side effects
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    // eslint-disable-next-line immutable/no-mutation
    ctx.renderPage = (): void =>
      originalRenderPage({
        enhanceApp: (App: any): any => (props: any): any =>
          sheets.collect(<App {...props} />),
      });

    const initialProps = await DocumentImport.getInitialProps(ctx);

    // eslint-disable-next-line no-return-assign
    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish
      styles: (
        <>
          <style
            dangerouslySetInnerHTML={{ __html: normalizeNextElements }}
            key={(index += 1)}
          />

          {sheets.getStyleElement()}

          {initialProps.styles || flush() || null}
        </>
      ),
      url,
    };
  }

  render(): React.ReactElement<any> {
    return (
      <html lang="en" style={{ height: '100%' }}>
        <Head>
          {/* General */}
          <meta charSet="utf-8" />
          <meta content="text/html; charset=utf-8" httpEquiv="content-type" />
          <meta
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
            name="viewport"
          />
          <meta content={NAMES.APP} name="application-name" />
          <meta content={NAMES.COMPANY} name="creator" />
          <meta
            content={
              ENV.NODE_ENV === 'production'
                ? 'index,follow'
                : 'noindex,nofollow'
            }
            name="robots"
          />
          <meta content={COLORS.PRIMARY} name="msapplication-TileColor" />
          <meta content={COLORS.PRIMARY} name="theme-color" />

          <meta
            content="RCyMwbqpOJnycWzhUXhN_Rau4zLKEJjlJOPrugGp21c"
            name="google-site-verification"
          />

          {/* Material UI */}
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700"
            rel="stylesheet"
          />

          {/* Styles */}
          <style global jsx>
            {globalStyles}
          </style>
        </Head>

        <body>
          <Main />

          {/* eslint-disable react/no-danger */}
          <script
            dangerouslySetInnerHTML={{
              __html: `__ENV__ = ${htmlescape(ENV)}`,
            }}
          />
          {/* eslint-enable react/no-danger */}

          <NextScript />
        </body>
      </html>
    );
  }
}

export default Document;
