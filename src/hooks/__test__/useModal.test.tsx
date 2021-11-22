import * as React from 'react';
import { act, render, RenderResult } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

import { modalDefault } from '@src/recoil/atoms/modal';
import { UseModal, useModal } from '../useModal';

describe('useModal', () => {
  let _wrapper: RenderResult;
  let hook: UseModal;

  const Component = () => {
    hook = useModal();

    return null;
  };

  beforeEach(() => {
    _wrapper = render(
      <RecoilRoot>
        <Component />
      </RecoilRoot>
    );
  });

  it('Initializes with the atoms default values', () => {
    expect(hook.state).toEqual(modalDefault);
  });

  it('The toggleModal method toggles the "open" state', () => {
    // Toggles it to "open: true"
    act(hook.toggleModal);
    expect(hook.state).toEqual({
      ...modalDefault,
      open: !modalDefault.open
    });

    // Toggles it back to "open: false"
    act(hook.toggleModal);
    expect(hook.state).toEqual(modalDefault);
  });

  it('The toggleModal method toggles sets "open" state', () => {
    let value = false;
    act(() => hook.toggleModal(value));
    expect(hook.state.open).toEqual(value);

    value = true;
    act(() => hook.toggleModal(value));
    expect(hook.state.open).toEqual(value);
  });
});
