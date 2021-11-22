import { useRecoilState } from 'recoil';

import { modalAtom } from '@src/recoil/atoms/modal';
import { Modal } from '@src/types';

interface UseModal {
  state: Modal;
  toggleModal: (open?: boolean) => void;
}

/**
 * @name useModal
 * @description A simple react hook for interacting with our Modal singleton
 */
const useModal = (): UseModal => {
  // Hooks
  const [modal, setModal] = useRecoilState(modalAtom);

  // Open and close the modal
  const toggleModal = (open?: boolean) => {
    const value = typeof open === 'boolean' ? open : !modal.open;
    setModal({ ...modal, open: value });
  };

  return {
    state: modal,
    toggleModal
  };
};

export { useModal };
export type { UseModal };
