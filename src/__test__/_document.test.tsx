import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

import { AppDocument, AppDocumentProps } from '../pages/_document';

describe.skip('AppDocument', () => {
  let props: AppDocumentProps;
  let wrapper: RenderResult;

  const createWrapper = () => (
    <RecoilRoot>
      <AppDocument {...props} />
    </RecoilRoot>
  );

  beforeEach(() => {
    props = {} as any;
    wrapper = render(createWrapper());
  });

  it('matches snapshot', () => {
    expect(wrapper.container.childNodes).toMatchSnapshot();
  });
});
