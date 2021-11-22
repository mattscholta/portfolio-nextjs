import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';

import { SectionOther, SectionOtherProps } from '../SectionOther';

describe('SectionOther', () => {
  let props: SectionOtherProps;
  let wrapper: RenderResult;

  const createWrapper = () => <SectionOther {...props} />;

  beforeEach(() => {
    props = {};
    wrapper = render(createWrapper());
  });

  it('matches snapshot', () => {
    expect(wrapper.container.childNodes).toMatchSnapshot();
  });
});
