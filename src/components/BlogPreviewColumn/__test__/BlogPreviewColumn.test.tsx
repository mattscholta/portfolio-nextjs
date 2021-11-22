import * as React from 'react';
import { MemoryRouter } from 'react-router';
import { render, RenderResult } from '@testing-library/react';

import {
  BlogPreviewColumn,
  BlogPreviewColumnProps
} from '../BlogPreviewColumn';

describe('BlogPreviewColumn', () => {
  let props: BlogPreviewColumnProps;
  let wrapper: RenderResult;

  const createWrapper = () => (
    <MemoryRouter>
      <BlogPreviewColumn {...props} />
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
