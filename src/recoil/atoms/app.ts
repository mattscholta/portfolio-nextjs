import { atom } from 'recoil';

export interface AppState {
  loading: boolean;
  navigation: {
    open: boolean;
  };
}

export const appDefault: AppState = {
  loading: true,
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
