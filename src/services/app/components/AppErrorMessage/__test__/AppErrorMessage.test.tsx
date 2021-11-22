import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';

import { AppErrorMessage, AppErrorMessageProps } from '../AppErrorMessage';

describe('AppErrorMessage', () => {
  const message = 'Sample error message';

  let props: AppErrorMessageProps;
  let wrapper: RenderResult;

  const createWrapper = () => <AppErrorMessage {...props} />;

  beforeEach(() => {
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
