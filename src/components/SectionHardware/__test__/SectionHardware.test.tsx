import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';

import { SectionHardware, SectionHardwareProps } from '../SectionHardware';

describe('SectionHardware', () => {
  let props: SectionHardwareProps;
  let wrapper: RenderResult;

  const createWrapper = () => <SectionHardware {...props} />;

  beforeEach(() => {
    props = {};
    wrapper = render(createWrapper());
  });

  it('matches snapshot', () => {
    expect(wrapper.container.childNodes).toMatchSnapshot();
  });
});
