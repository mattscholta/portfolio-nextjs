import { useRecoilState } from 'recoil';

import { appAtom } from '@src/recoil/atoms/app';

export interface UseApp {
  toggleLoader: (value?: boolean) => void;
}

export const useApp = (): UseApp => {
  const [app, setApp] = useRecoilState(appAtom);

  const toggleLoader = (value?: boolean) => {
    const undef = typeof value === 'undefined';
    const newValue = undef ? !app.loading : Boolean(value);

    setApp(() => ({ ...app, loading: newValue }));
  };

  return {
    toggleLoader
  };
};
