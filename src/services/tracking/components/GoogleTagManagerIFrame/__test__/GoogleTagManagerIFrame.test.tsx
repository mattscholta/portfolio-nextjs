import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';

import {
  GoogleTagManagerIFrame,
  GoogleTagManagerIFrameProps
} from '../GoogleTagManagerIFrame';

describe('GoogleTagManagerIFrame', () => {
  let props: GoogleTagManagerIFrameProps;
  let wrapper: RenderResult;

  const createWrapper = () => <GoogleTagManagerIFrame {...props} />;

  beforeEach(() => {
    props = { id: 'test-id' };
    wrapper = render(createWrapper());
  });

  it('matches snapshot', () => {
    expect(wrapper.container.childNodes).toMatchSnapshot();
  });
});
