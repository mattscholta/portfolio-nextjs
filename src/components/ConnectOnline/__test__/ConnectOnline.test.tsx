import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';

import { ConnectOnline, ConnectOnlineProps } from '../ConnectOnline';

describe('ConnectOnline', () => {
  let props: ConnectOnlineProps;
  let wrapper: RenderResult;

  const createWrapper = () => <ConnectOnline {...props} />;

  beforeEach(() => {
    props = {};
    wrapper = render(createWrapper());
  });

  it('matches snapshot', () => {
    expect(wrapper.container.childNodes).toMatchSnapshot();
  });
});
