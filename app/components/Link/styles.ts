/**
 * @prettier
 */

import css from 'styled-jsx/css';

import COLORS from '~/constants/colors';

export default css`
  a {
    color: inherit;
    text-decoration: none;
  }
  a.textLink {
    color: ${COLORS.LINK};
  }
  a.textLink:hover {
    text-decoration: underline;
  }
`;
