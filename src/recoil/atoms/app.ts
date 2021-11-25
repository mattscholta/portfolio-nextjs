import { atom } from 'recoil';

export interface AppState {
  loading: boolean;
  navigation: {
    open: boolean;
  };
}

export const appDefault: AppState = {
  loading: false,
  navigation: {
    open: false
  }
};

/**
 * @name appAtom
 * @description tbd...
 */
export const appAtom = atom<AppState>({
  default: appDefault,
  key: 'app'
});
