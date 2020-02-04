/**
 * @prettier
 */

module.exports = {
  extends: ['@joncursi/eslint-config'],
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {},
      typescript: {},
    },
  },
};
