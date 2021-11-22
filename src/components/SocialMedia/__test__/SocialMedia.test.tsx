import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';

import { SocialMedia, SocialMediaProps } from '../SocialMedia';

describe('SocialMedia', () => {
  let props: SocialMediaProps;
  let wrapper: RenderResult;

  const createWrapper = () => <SocialMedia {...props} />;

  beforeEach(() => {
    props = {};
    wrapper = render(createWrapper());
  });

  it('matches snapshot', () => {
    expect(wrapper.container.childNodes).toMatchSnapshot();
  });
});
