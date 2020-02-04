/**
 * @prettier
 */

/* eslint-disable immutable/no-mutation */

module.exports = api => {
  const isTestEnv = api.env('test');

  const plugins = [
    [
      'babel-plugin-root-import',
      {
        rootPathPrefix: '~',
        rootPathSuffix: './app',
      },
    ],
    [
      'babel-plugin-transform-imports',
      {
        '@material-ui/core': {
          transform: '@material-ui/core/${member}',
          preventFullImport: true,
        },
        lodash: {
          transform: 'lodash/${member}',
          preventFullImport: true,
        },
      },
    ],
  ];

  const presets = [];

  if (isTestEnv) {
    plugins.push('styled-jsx/babel-test');
    presets.push([
      'next/babel',
      {
        'preset-env': {
          modules: 'commonjs',
        },
      },
    ]);
  } else {
    presets.push('next/babel');
  }

  return {
    plugins,
    presets,
  };
};
