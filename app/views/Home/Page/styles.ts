/**
 * @prettier
 */

import css from 'styled-jsx/css';
import { grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

import COLORS from '~/constants/colors';
import DIMS from '~/constants/dims';

export const useStyles = makeStyles({
  buttonRoot: {
    marginTop: DIMS.LAYOUT_PADDING / 4,
    width: '100%',
  },
  dividerRoot: {
    marginBottom: DIMS.LAYOUT_PADDING / 1.5,
    marginTop: DIMS.LAYOUT_PADDING / 2,
  },
  typographyRoot: {
    marginBottom: DIMS.LAYOUT_PADDING / 1.5,
  },
});

export default css`
  .container {
    align-items: center;
    display: flex;
    flex: 1;
    height: 100%;
    justify-content: center;
    margin: 0 ${DIMS.LAYOUT_PADDING}px;
  }
  .contentContainer {
    background-color: ${COLORS.WHITE};
    border: 1px solid ${grey[500]};
    border-radius: 3px;
    padding: ${DIMS.LAYOUT_PADDING}px;
    max-width: 500px;
  }
  ul {
    padding-left: ${DIMS.LAYOUT_PADDING * 1.75}px;
  }
`;
