import * as React from 'react';
import {
  fireEvent,
  getByDisplayValue,
  render,
  RenderResult
} from '@testing-library/react';

import { useFormInput } from '../useFormInput';

describe('useFormInput', () => {
  let wrapper: RenderResult;

  const value = 'test_value';
  const Component = () => {
    const inputEx = useFormInput(value);

    return (
      <input onChange={inputEx.onChange} type="text" value={inputEx.value} />
    );
  };

  beforeEach(() => {
    wrapper = render(<Component />);
  });

  it('Sets the inputs initial value', () => {
    expect(getByDisplayValue(wrapper.container, value));
  });

  /**
   * The onChange event is actually a bit trickier than others
   * @external https://testing-library.com/docs/react-testing-library/faq/
   */
  it('updates the input on "change"', () => {
    const newValue = 'updated text';
    const el = getByDisplayValue(wrapper.container, value);

    // Trigger the `onChange`
    fireEvent.change(el, { target: { value: newValue } });

    // Assert the input was updated
    expect(getByDisplayValue(wrapper.container, newValue));
  });
});
