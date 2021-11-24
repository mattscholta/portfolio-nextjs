import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

import { AppLifeCycle, AppLifeCycleProps } from '../AppLifeCycle';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      asPath: '',
      events: {
        on: jest.fn()
      },
      pathname: '/',
      query: {},
      route: '/'
    };
  }
}));

describe('AppLifeCycle', () => {
  const gtag = jest.fn();

  let props: AppLifeCycleProps;
  let wrapper: RenderResult;

  const createWrapper = () => (
    <RecoilRoot>
      <AppLifeCycle {...props} />
    </RecoilRoot>
  );

  beforeAll(() => {
    window.gtag = gtag;
  });

  beforeEach(() => {
    props = {};
    wrapper = render(createWrapper());
  });

  it('matches snapshot', () => {
    expect(wrapper.container.childNodes).toMatchSnapshot();
  });
});
