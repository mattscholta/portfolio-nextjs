import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';

import { PreviewCard, PreviewCardProps } from '../PreviewCard';

describe('PreviewCard', () => {
  let props: PreviewCardProps;
  let wrapper: RenderResult;

  const createWrapper = () => <PreviewCard {...props} />;

  beforeEach(() => {
    props = {
      data: {
        description: 'test-description',
        image: 'test-image',
        slug: 'test-slug',
        title: 'test-title'
      }
    };

    wrapper = render(createWrapper());
  });

  it('matches snapshot', () => {
    expect(wrapper.container.childNodes).toMatchSnapshot();
  });
});
