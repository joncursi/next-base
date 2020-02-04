/**
 * @prettier
 */

import * as React from 'react';
import { NextPage } from 'next';

import Meta from './meta';
import Page from './Page';

const Home: NextPage = (): React.ReactElement<any> => (
  <>
    <Page />

    <Meta />
  </>
);

export default Home;
