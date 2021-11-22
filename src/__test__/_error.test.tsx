import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

import { ErrorPage, ErrorPageProps } from '../pages/_error';

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

describe.skip('ErrorPage', () => {
  let props: ErrorPageProps;
  let wrapper: RenderResult;

  const MockComponent = () => <div>mock component</div>;
  const createWrapper = () => (
    <RecoilRoot>
      <ErrorPage {...props} />
    </RecoilRoot>
  );

  beforeEach(() => {
    props = {
      Component: MockComponent,
      pageProps: {},
      router: {} as any
    };

    wrapper = render(createWrapper());
  });

  it('matches snapshot', () => {
    expect(wrapper.container.childNodes).toMatchSnapshot();
  });

  it('renders the error page', () => {
    // const imgAlt = 'Page not found!';
    // expect(wrapper.getByAltText(imgAlt));

    const copy = `Sorry, we couldn’t find the page you were looking for.`;
    expect(wrapper.getAllByText(copy));
  });
});
