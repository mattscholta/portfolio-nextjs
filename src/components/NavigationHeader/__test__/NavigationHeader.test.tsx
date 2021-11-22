import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';

import { NavigationHeader, NavigationHeaderProps } from '../NavigationHeader';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      asPath: '',
      pathname: '',
      push: jest.fn(),
      query: {},
      route: '/'
    };
  }
}));

describe('NavigationHeader', () => {
  let props: NavigationHeaderProps;
  let wrapper: RenderResult;

  const createWrapper = () => <NavigationHeader {...props} />;

  beforeEach(() => {
    props = {};
    wrapper = render(createWrapper());
  });

  it('matches snapshot', () => {
    expect(wrapper.container.childNodes).toMatchSnapshot();
  });
});
