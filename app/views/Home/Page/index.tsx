/**
 * @prettier
 */

import * as React from 'react';
import { Button, Divider, Typography } from '@material-ui/core';

import Link from '~/components/Link';

import styles, { useStyles } from './styles';

const TECHNOLOGIES = [
  {
    name: 'TypeScript',
    to: 'https://www.typescriptlang.org/',
  },
  {
    name: 'Express',
    to: 'https://expressjs.com/',
  },
  {
    name: 'Material UI',
    to: 'https://material-ui.com/',
  },
  {
    name: 'Styled JSX',
    to: 'https://github.com/zeit/styled-jsx',
  },
  {
    name: 'Jest',
    to: 'https://jestjs.io/',
  },
  {
    name: 'ESLint',
    to: 'https://eslint.org/',
  },
  {
    name: 'CommitLint',
    to: 'https://commitlint.js.org/',
  },
  {
    name: 'Prettier',
    to: 'https://prettier.io/',
  },
  {
    name: 'Fastlane',
    to: 'https://fastlane.tools/',
  },
  {
    name: 'Zeit Now',
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
