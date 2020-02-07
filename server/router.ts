/**
 * @prettier
 */

import NextRouter from 'next-routes';

import ROUTES from '../app/constants/routes';

const Router = new NextRouter();

Router.add({
  name: ROUTES.HOME,
  page: 'Home',
  pattern: '/',
});

export default Router;
