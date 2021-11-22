import { atom } from 'recoil';

export interface AppState {
  loading: boolean;
  // user: any;
}

export const appDefault: AppState = {
  loading: false
  // user: {}
};

/**
 * @name appAtom
 * @description tbd...
 */
export const appAtom = atom<AppState>({
  default: appDefault,
  key: 'app'
});
