import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';

import { StructuredData, StructuredDataProps } from '../StructuredData';

describe('StructuredData', () => {
  let props: StructuredDataProps;
  let wrapper: RenderResult;

  const createWrapper = () => <StructuredData {...props} />;

  beforeEach(() => {
    props = { data: {} };
    wrapper = render(createWrapper());
  });

  it('matches snapshot', () => {
    expect(wrapper.container.childNodes).toMatchSnapshot();
  });
});
