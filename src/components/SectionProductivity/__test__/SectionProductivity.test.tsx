import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';

import {
  SectionProductivity,
  SectionProductivityProps
} from '../SectionProductivity';

describe('SectionProductivity', () => {
  let props: SectionProductivityProps;
  let wrapper: RenderResult;

  const createWrapper = () => <SectionProductivity {...props} />;

  beforeEach(() => {
    props = {};
    wrapper = render(createWrapper());
  });

  it('matches snapshot', () => {
    expect(wrapper.container.childNodes).toMatchSnapshot();
  });
});
