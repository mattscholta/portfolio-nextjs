import { atom } from 'recoil';

import { Modal } from '@src/types';

export const modalDefault: Modal = {
  content: '',
  open: false
};

/**
 * @name modalAtom
 * @description This atom stores the content used for rendering our
 * Modal singleton
 */
export const modalAtom = atom<Modal>({
  default: modalDefault,
  key: 'modal'
});
