/**
 * @prettier
 */

/* eslint-disable filenames/match-regex, filenames/match-exported */

import * as React from 'react';
import Application from 'next/app';
import { CssBaseline } from '@material-ui/core';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';

import theme from '~/styles/theme';

const BASE_URL_FAVICON = '/static/img/favicons';

interface Props {
  Component: any;
  pageProps: Record<string, any>;
}

class App extends Application<Props> {
  componentDidMount(): void {
    // Remove the server-side injected CSS
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render(): React.ReactElement<any> {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          {/* Icons */}
          <link
            href={`${BASE_URL_FAVICON}/apple-icon-57x57.png`}
            rel="apple-touch-icon"
            sizes="57x57"
          />
          <link
            href={`${BASE_URL_FAVICON}/apple-icon-60x60.png`}
            rel="apple-touch-icon"
            sizes="60x60"
          />
          <link
            href={`${BASE_URL_FAVICON}/apple-icon-72x72.png`}
            rel="apple-touch-icon"
            sizes="72x72"
          />
          <link
            href={`${BASE_URL_FAVICON}/apple-icon-76x76.png`}
            rel="apple-touch-icon"
            sizes="76x76"
          />
          <link
            href={`${BASE_URL_FAVICON}/apple-icon-114x114.png`}
            rel="apple-touch-icon"
            sizes="114x114"
          />
          <link
            href={`${BASE_URL_FAVICON}/apple-icon-120x120.png`}
            rel="apple-touch-icon"
            sizes="120x120"
          />
          <link
            href={`${BASE_URL_FAVICON}/apple-icon-144x144.png`}
            rel="apple-touch-icon"
            sizes="144x144"
          />
          <link
            href={`${BASE_URL_FAVICON}/apple-icon-152x152.png`}
            rel="apple-touch-icon"
            sizes="152x152"
          />
          <link
            href={`${BASE_URL_FAVICON}/apple-icon-180x180.png`}
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link
            href={`${BASE_URL_FAVICON}/apple-icon-192x192.png`}
            rel="apple-touch-icon"
            sizes="192x192"
            type="image/png"
          />
          <link
            href={`${BASE_URL_FAVICON}/favicon-32x32.png`}
            rel="icon"
            sizes="32x32"
            type="image/png"
          />
          <link
            href={`${BASE_URL_FAVICON}/favicon-96x96.png`}
            rel="icon"
            sizes="96x96"
            type="image/png"
          />
          <link
            href={`${BASE_URL_FAVICON}/favicon-16x16.png`}
            rel="icon"
            sizes="16x16"
            type="image/png"
          />
          <link href={`${BASE_URL_FAVICON}/manifest.json`} rel="manifest" />
          <meta
            content={`${BASE_URL_FAVICON}/ms-icon-144x144.png`}
            name="msapplication-TileImage"
          />
        </Head>

        <ThemeProvider theme={theme}>
          <CssBaseline />

          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}

export default App;
