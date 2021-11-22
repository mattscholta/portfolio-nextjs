import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';

import {
  BlogPreviewColumn,
  BlogPreviewColumnProps
} from '../BlogPreviewColumn';

describe('BlogPreviewColumn', () => {
  let props: BlogPreviewColumnProps;
  let wrapper: RenderResult;

  const createWrapper = () => <BlogPreviewColumn {...props} />;

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
