import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';

import { Logo, LogoProps } from '../Logo';

describe('Logo', () => {
  let props: LogoProps;
  let wrapper: RenderResult;

  const createWrapper = () => <Logo {...props} />;

  beforeEach(() => {
    props = {};
    wrapper = render(createWrapper());
  });

  it('matches snapshot', () => {
    expect(wrapper.container.childNodes).toMatchSnapshot();
  });
});
