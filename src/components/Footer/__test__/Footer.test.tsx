import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';

import { Footer, FooterProps } from '../Footer';

describe('Footer', () => {
  let props: FooterProps;
  let wrapper: RenderResult;

  const createWrapper = () => <Footer {...props} />;

  beforeEach(() => {
    props = {};
    wrapper = render(createWrapper());
  });

  it('matches snapshot', () => {
    expect(wrapper.container.childNodes).toMatchSnapshot();
  });
});
