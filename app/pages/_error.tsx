/**
 * @prettier
 */

/* eslint-disable filenames/match-regex, filenames/match-exported */

import * as React from 'react';
import Err from 'next/error';
import { NextPageContext } from 'next';

interface Props {
  statusCode: number;
}

class Error extends React.Component<Props> {
  static async getInitialProps(ctx: NextPageContext): Promise<Props> {
    const statusCode = ctx.res ? ctx.res.statusCode : 500;

    return {
      statusCode,
    };
  }

  render(): React.ReactNode {
    const { statusCode } = this.props;

    return <Err statusCode={statusCode} title="Error" />;
  }
}

export default Error;
