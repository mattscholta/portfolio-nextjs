import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

import { Application, ApplicationProps } from '../pages/_app';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      asPath: '',
      pathname: '/',
      query: {},
      route: '/'
    };
  }
}));

describe.skip('Application', () => {
  const gtag = jest.fn();

  let props: ApplicationProps;
  let wrapper: RenderResult;

  const MockComponent = () => <div>mock component</div>;
  const createWrapper = () => (
    <RecoilRoot>
      <Application {...props} />
    </RecoilRoot>
  );

  beforeAll(() => {
    window.gtag = gtag;
    props = {
      Component: MockComponent,
      cookies: {},
      global: {},
      pageProps: {},
      router: {
        asPath: '',
        pathname: '/',
        query: {},
        route: '/'
      } as any
    };

    wrapper = render(createWrapper());
  });

  it('matches snapshot', () => {
    expect(wrapper.container.childNodes).toMatchSnapshot();
  });
});
