/**
 * @prettier
 */

import { isEmpty } from 'lodash';

const ENV =
  process && !isEmpty(process.env)
    ? // grab env variables from node on the server
      process.env
    : // grab env variables from `window` on the client
      (window as any)['__ENV__']; // eslint-disable-line dot-notation

export default ENV;
