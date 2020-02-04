/**
 * @prettier
 */

import { createGzip } from 'zlib';
import express from 'express';
import next from 'next';
import { SitemapStream, streamToPromise } from 'sitemap';

import ENV from '../app/constants/env';

import Routes from './routes';

// Create the express server
const expressApp = express();

// Create the next app
const nextApp = (next as any)({
  // Set the `dev` flag in development to enable Hot Module Replacement
  dev: ENV.NODE_ENV === 'development',
  // Custom `pages` location
  dir: './app',
});

// Create the next handle
const nextHandle = Routes.getRequestHandler(nextApp);

// Configure `sitemap.xml`
let sitemap: any;
expressApp.get(
  '/sitemap.xml',
  async (req, res): Promise<void> => {
    const hostname = `https://${req.get('host')}`;

    res.header('Content-Type', 'application/xml');
    res.header('Content-Encoding', 'gzip');

    // if we have a cached entry send it
    if (sitemap) {
      res.send(sitemap);
      return;
    }

    try {
      const smStream = new SitemapStream({ hostname });
      const pipeline = smStream.pipe(createGzip());

      smStream.write({ changefreq: 'monthly', priority: 1, url: '/' });
      smStream.end();
      sitemap = await streamToPromise(pipeline);
      pipeline.pipe(res).on('error', e => {
        throw e;
      });
    } catch (e) {
      res.status(500).end();
    }
  },
);

// Configure `robots.txt`
expressApp.get('/robots.txt', (req, res): void => {
  const hostname = `https://${req.get('host')}`;

  res.setHeader('content-type', 'text/plain');
  res.send(`User-agent: *
${
  ENV.NODE_ENV === 'production'
    ? `Sitemap: ${hostname}/sitemap.xml`
    : 'Disallow: /'
}`);
});

// Render a next route
expressApp.get('*', (req, res): void => nextHandle(req, res));

const startServer = async (): Promise<void> => {
  await nextApp.prepare();
  await expressApp.listen(ENV.PORT);
  // eslint-disable-next-line no-console
  console.log(`> Serving on http://localhost:${ENV.PORT}`);
};

startServer();
