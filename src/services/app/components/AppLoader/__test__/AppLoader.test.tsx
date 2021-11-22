import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

import { AppLoader, AppLoaderProps } from '../AppLoader';

describe('AppLoader', () => {
  let props: AppLoaderProps;
  let wrapper: RenderResult;

  const createWrapper = () => (
    <RecoilRoot>
      <AppLoader {...props} />
    </RecoilRoot>
  );

  beforeEach(() => {
    props = {};
    wrapper = render(createWrapper());
  });

  it('matches snapshot', () => {
    expect(wrapper.container.childNodes).toMatchSnapshot();
  });
});
