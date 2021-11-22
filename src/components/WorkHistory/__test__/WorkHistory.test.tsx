import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';

import { WorkHistory, WorkHistoryProps } from '../WorkHistory';

describe('WorkHistory', () => {
  let props: WorkHistoryProps;
  let wrapper: RenderResult;

  const createWrapper = () => <WorkHistory {...props} />;

  beforeEach(() => {
    props = {};
    wrapper = render(createWrapper());
  });

  it('matches snapshot', () => {
    expect(wrapper.container.childNodes).toMatchSnapshot();
  });
});
