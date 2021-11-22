import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';

import { DevelopmentStack, DevelopmentStackProps } from '../DevelopmentStack';

describe('DevelopmentStack', () => {
  let props: DevelopmentStackProps;
  let wrapper: RenderResult;

  const createWrapper = () => <DevelopmentStack {...props} />;

  beforeEach(() => {
    props = {};
    wrapper = render(createWrapper());
  });

  it('matches snapshot', () => {
    expect(wrapper.container.childNodes).toMatchSnapshot();
  });
});
