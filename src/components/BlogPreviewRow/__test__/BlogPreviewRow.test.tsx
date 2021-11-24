import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';

import { BlogPreviewRow, BlogPreviewRowProps } from '../BlogPreviewRow';

describe.skip('BlogPreviewRow', () => {
  let props: BlogPreviewRowProps;
  let wrapper: RenderResult;

  const createWrapper = () => <BlogPreviewRow {...props} />;

  beforeEach(() => {
    props = {
      className: '',
      post: {
        URL: '',
        __typename: 'BlogPost',
        content: '',
        date: '',
        excerpt: '',
        featured_image: '',
        modified: '',
        post_thumbnail: {
          URL: '',
          __typename: 'BlogPostThumb',
          height: 100,
          width: 100
        },
        slug: '',
        sticky: false,
        title: ''
      },
      small: false
    };

    wrapper = render(createWrapper());
  });

  it('matches snapshot', () => {
    expect(wrapper.container.childNodes).toMatchSnapshot();
  });
});
