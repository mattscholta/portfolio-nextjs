import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';

import { AppHead, AppHeadProps } from '../AppHead';

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

describe('AppHead', () => {
  let props: AppHeadProps;
  let wrapper: RenderResult;

  const createWrapper = () => <AppHead {...props} />;

  beforeEach(() => {
    props = {};
    wrapper = render(createWrapper());
  });

  it('matches snapshot', () => {
    expect(wrapper.container.childNodes).toMatchSnapshot();
  });
});
