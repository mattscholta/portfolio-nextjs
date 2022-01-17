import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';

import { BarGuideLogo, BarGuideLogoProps } from '../BarGuideLogo';

describe('BarGuideLogo', () => {
  let props: BarGuideLogoProps;
  let wrapper: RenderResult;

  const createWrapper = () => <BarGuideLogo {...props} />;

  beforeEach(() => {
    props = {};
    wrapper = render(createWrapper());
  });

  it('matches snapshot', () => {
    expect(wrapper.container.childNodes).toMatchSnapshot();
  });
});
