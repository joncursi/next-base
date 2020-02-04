/**
 * @prettier
 */

import ROUTES from '../app/constants/routes';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const NextRoutes = require('next-routes');

const routes = NextRoutes();

routes.add({
  name: ROUTES.HOME,
  page: 'Home',
  pattern: '/',
});

export default routes;
