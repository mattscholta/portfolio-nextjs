import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';

import { NavigationFooter, NavigationFooterProps } from '../NavigationFooter';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      asPath: '',
      pathname: '/',
      push: jest.fn(),
      query: {},
      route: '/'
    };
  }
}));

describe('NavigationFooter', () => {
  let props: NavigationFooterProps;
  let wrapper: RenderResult;

  const createWrapper = () => <NavigationFooter {...props} />;

  beforeEach(() => {
    props = {};
    wrapper = render(createWrapper());
  });

  it('matches snapshot', () => {
    expect(wrapper.container.childNodes).toMatchSnapshot();
  });
});
