import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';

import { BlockQuote, BlockQuoteProps } from '../BlockQuote';

describe('BlockQuote', () => {
  let props: BlockQuoteProps;
  let wrapper: RenderResult;

  const createWrapper = () => <BlockQuote {...props} />;

  beforeEach(() => {
    props = {};
    wrapper = render(createWrapper());
  });

  it('matches snapshot', () => {
    expect(wrapper.container.childNodes).toMatchSnapshot();
  });
});
