import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';

import { <%= name %>, <%= name %>Props } from '../<%= name %>';

describe('<%= name %>', () => {
  let props: <%= name %>Props;
  let wrapper: RenderResult;

  const createWrapper = () => <<%= name %> {...props} />;

  beforeEach(() => {
    props = {};
    wrapper = render(createWrapper());
  });

  it('matches snapshot', () => {
    expect(wrapper.container.childNodes).toMatchSnapshot();
  });
});
