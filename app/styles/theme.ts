/**
 * @prettier
 */

import { createMuiTheme } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

import COLORS from '~/constants/colors';

export default createMuiTheme({
  palette: {
    primary: {
      dark: grey[700],
      light: grey[300],
      main: grey[700],
    },
    secondary: {
      main: COLORS.WHITE,
    },
  },
});
