import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

import { Index, IndexProps } from '../pages/index';

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

describe('Index', () => {
  let props: IndexProps;
  let wrapper: RenderResult;

  const createWrapper = () => (
    <RecoilRoot>
      <Index {...props} />
    </RecoilRoot>
  );

  beforeAll(() => {
    window.IntersectionObserver = jest.fn().mockImplementation(() => ({
      disconnect: jest.fn(),
      observe: jest.fn(),
      unobserve: jest.fn()
    }));

    props = { error: false };
    wrapper = render(createWrapper());
  });

  it('matches snapshot', () => {
    expect(wrapper.container.childNodes).toMatchSnapshot();
  });
});
