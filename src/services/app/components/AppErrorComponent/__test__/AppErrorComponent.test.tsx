import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';

import {
  AppErrorComponent,
  AppErrorComponentProps
} from '../AppErrorComponent';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      asPath: '',
      pathname: '',
      query: {},
      route: '/'
    };
  }
}));

describe('AppErrorComponent', () => {
  let props: AppErrorComponentProps;
  let wrapper: RenderResult;

  const createWrapper = () => <AppErrorComponent {...props} />;

  beforeAll(() => {
    props = {};
    wrapper = render(createWrapper());
  });

  it('returns null when there is no message', () => {
    expect(wrapper.container.firstChild).toBeNull();
    expect(wrapper.container.childNodes).toMatchSnapshot('null');
  });

  it('renders an error message', () => {
    props.message = 'Sample error message';
    wrapper.rerender(createWrapper());

    expect(wrapper.findAllByText(props.message));
    expect(wrapper.container.childNodes).toMatchSnapshot('rendered');
  });
});
