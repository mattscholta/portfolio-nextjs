import { appAtom, appDefault } from '@src/recoil/atoms/app';
import { RecoilInitializer } from '@src/types';

/**
 * @name initializeState
 * @description tbd...
 */
export const initializeState =
  (app = appDefault): RecoilInitializer =>
  (snapshot) => {
    const { set } = snapshot;

    set(appAtom, app);
  };
