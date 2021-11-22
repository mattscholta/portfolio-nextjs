import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';

import { GoogleAnalytics, GoogleAnalyticsProps } from '../GoogleAnalytics';

describe('GoogleAnalytics', () => {
  let props: GoogleAnalyticsProps;
  let wrapper: RenderResult;

  const createWrapper = () => <GoogleAnalytics {...props} />;

  beforeEach(() => {
    props = { id: 'test-id' };
    wrapper = render(createWrapper());
  });

  it('matches snapshot', () => {
    expect(wrapper.container.childNodes).toMatchSnapshot();
  });
});
