import * as React from 'react';
import { MemoryRouter } from 'react-router';
import { render, RenderResult } from '@testing-library/react';

import { BlogPreviewRow, BlogPreviewRowProps } from '../BlogPreviewRow';

describe('BlogPreviewRow', () => {
  let props: BlogPreviewRowProps;
  let wrapper: RenderResult;

  const createWrapper = () => (
    <MemoryRouter>
      <BlogPreviewRow {...props} />
    </MemoryRouter>
  );

  beforeEach(() => {
    props = {
      className: '',
      post: {
        __typename: 'BlogPost',
        date: '',
        excerpt: '',
        URL: '',
        content: '',
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
