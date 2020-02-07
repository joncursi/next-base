/**
 * @prettier
 */

import * as React from 'react';
import { Button, Divider, Typography } from '@material-ui/core';

import Link from '~/components/Link';

import styles, { useStyles } from './styles';

const TECHNOLOGIES = [
  {
    description: 'for dynamic routing',
    name: 'Next Routes',
    to: 'https://github.com/fridays/next-routes',
  },
  {
    description: 'for environment variables',
    name: 'Dotenv CLI',
    to: 'https://github.com/entropitor/dotenv-cli',
  },
  {
    description: 'as the language',
    name: 'TypeScript',
    to: 'https://www.typescriptlang.org/',
  },
  {
    description: 'as the server',
    name: 'Express',
    to: 'https://expressjs.com/',
  },
  {
    description: 'as the design system',
    name: 'Material UI',
    to: 'https://material-ui.com/',
  },
  {
    description: 'for CSS in JS',
    name: 'Styled JSX',
    to: 'https://github.com/zeit/styled-jsx',
  },
  {
    description: 'as the test runner',
    name: 'Jest',
    to: 'https://jestjs.io/',
  },
  {
    description: 'for component unit testing',
    name: 'Snapshots',
    to: 'https://jestjs.io/docs/en/snapshot-testing',
  },
  {
    description: 'for code linting',
    name: 'ESLint',
    to: 'https://eslint.org/',
  },
  {
    description: 'for commit linting',
    name: 'CommitLint',
    to: 'https://commitlint.js.org/',
  },
  {
    description: 'for code formatting',
    name: 'Prettier',
    to: 'https://prettier.io/',
  },
  {
    description: 'for release management',
    name: 'Fastlane',
    to: 'https://fastlane.tools/',
  },
  {
    description: 'for deployments',
    name: 'Now',
    to: 'https://zeit.co/',
  },
];

const Page: React.FC = (): React.ReactElement<any> => {
  const [numberOfClicks, setNumberOfClicks] = React.useState(0);

  const classes = useStyles();

  return (
    <>
      <style jsx>{styles}</style>

      <div className="container">
        <div className="contentContainer">
          <Typography variant="h6">Next Base</Typography>

          <Divider
            classes={{
              root: classes.dividerRoot,
            }}
          />

          <Typography
            classes={{
              root: classes.typographyRoot,
            }}
          >
            <span aria-label="next" role="img">
              ⏭️
            </span>
            &nbsp;Base setup for a&nbsp;
            <Link target="_blank" to="https://nextjs.org/" variant="text">
              Next.js
            </Link>
            &nbsp;front-end. Includes:
          </Typography>
          <ul>
            {TECHNOLOGIES.map(
              (technology): React.ReactElement<any> => (
                <li key={technology.name}>
                  <Typography>
                    <Link target="_blank" to={technology.to} variant="text">
                      {technology.name}
                    </Link>
                    &nbsp;
                    {technology.description}
                  </Typography>
                </li>
              ),
            )}
          </ul>

          <Button
            classes={{
              root: classes.buttonRoot,
            }}
            onClick={(): void => {
              setNumberOfClicks(numberOfClicks + 1);
            }}
            variant="outlined"
          >
            {`I've been clicked ${numberOfClicks} times`}
          </Button>
        </div>
      </div>
    </>
  );
};

export default Page;
