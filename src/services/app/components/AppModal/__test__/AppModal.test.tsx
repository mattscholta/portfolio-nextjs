import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

import { AppModal, AppModalProps } from '../AppModal';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      asPath: '',
      pathname: '',
      push: jest.fn(),
      query: {},
      route: '/'
    };
  }
}));

describe('AppModal', () => {
  let props: AppModalProps;
  let wrapper: RenderResult;

  const createWrapper = () => (
    <RecoilRoot>
      <AppModal {...props} />
    </RecoilRoot>
  );
  beforeEach(() => {
    props = {};
    wrapper = render(createWrapper());
  });

  it('matches snapshot', () => {
    expect(wrapper.container.childNodes).toMatchSnapshot();
  });
});
