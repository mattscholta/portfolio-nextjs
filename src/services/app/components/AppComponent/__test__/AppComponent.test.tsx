import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';

import { AppComponent, AppComponentProps } from '../AppComponent';

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

describe.skip('AppComponent', () => {
  let props: AppComponentProps;
  let wrapper: RenderResult;

  const createWrapper = () => (
    <AppComponent {...props}>
      <div>Test children...</div>
    </AppComponent>
  );

  beforeAll(() => {
    (window as any).fetch = jest.fn(() => Promise.resolve());
  });

  beforeEach(() => {
    props = { global: {}, pageProps: {} };
    wrapper = render(createWrapper());
  });

  it('matches snapshot', () => {
    expect(wrapper.container.childNodes).toMatchSnapshot();
  });
});
