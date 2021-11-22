import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

import { AppErrorRedirect, AppErrorRedirectProps } from '../AppErrorRedirect';

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

describe('AppErrorRedirect', () => {
  const message = 'Sample error message';

  let props: AppErrorRedirectProps;
  let wrapper: RenderResult;

  const createWrapper = () => (
    <RecoilRoot>
      <AppErrorRedirect {...props} />
    </RecoilRoot>
  );

  beforeAll(() => {
    props = {};
    wrapper = render(createWrapper());
  });

  it('returns null when there is no message', () => {
    expect(wrapper.container.firstChild).toBeNull();
    expect(wrapper.container.childNodes).toMatchSnapshot('null');
  });

  it('renders an error message', () => {
    props.message = message;
    wrapper.rerender(createWrapper());

    expect(wrapper.findAllByText(message));
    expect(wrapper.container.childNodes).toMatchSnapshot('rendered');
  });
});
