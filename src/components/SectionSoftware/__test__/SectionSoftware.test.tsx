import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';

import { SectionSoftware, SectionSoftwareProps } from '../SectionSoftware';

describe('SectionSoftware', () => {
  let props: SectionSoftwareProps;
  let wrapper: RenderResult;

  const createWrapper = () => <SectionSoftware {...props} />;

  beforeEach(() => {
    props = {};
    wrapper = render(createWrapper());
  });

  it('matches snapshot', () => {
    expect(wrapper.container.childNodes).toMatchSnapshot();
  });
});
