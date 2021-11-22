import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';

import { AppDropdown, AppDropdownProps } from '../AppDropdown';

describe('AppDropdown', () => {
  const Content = jest.fn().mockImplementation(() => null);
  const Dropdown = jest.fn().mockImplementation(() => null);

  let props: AppDropdownProps;
  let wrapper: RenderResult;

  const createWrapper = () => <AppDropdown {...props} />;

  beforeEach(() => {
    props = {
      content: Content,
      dropdown: Dropdown
    };

    wrapper = render(createWrapper());
  });

  it('matches snapshot', () => {
    expect(wrapper.container.childNodes).toMatchSnapshot();
  });
});
