/**
 * @prettier
 */

import * as React from 'react';

import RenderMetaTags from '~/components/RenderMetaTags';

const Meta: React.FC = (): React.ReactElement<any> => (
  <RenderMetaTags
    description="Page description."
    keywords={['keyword1', 'keyword2', 'keyword3']}
  />
);

export default Meta;
