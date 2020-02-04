/**
 * @prettier
 */

import * as React from 'react';
import renderer from 'react-test-renderer';

import RenderMetaTags from '.';

describe('RenderMetaTags', () => {
  it('matches the snapshot', () => {
    const tree = renderer
      .create(
        <RenderMetaTags
          description="Some description."
          imageUrl="https://joncursi.com"
          keywords={['keyword1', 'keyword2', 'keyword3']}
          title="Some Title"
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
