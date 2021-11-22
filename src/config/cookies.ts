import { CookieSetOptions } from 'universal-cookie';

import { IS_DEVELOPMENT } from './settings';

export const DATE_TODAY = new Date();
export const DATE_TEN_YEARS_MS = 1000 * 60 * 60 * 24 * 365 * 10;
export const DATE_TEN_YEARS_EXP = DATE_TODAY.getTime() + DATE_TEN_YEARS_MS;

export const COOKIE_AUTH_TOKEN = 'auth';
export const COOKIE_BETA = 'beta';
export const COOKIE_DISCLAIMER = 'disclaimer';

export const COOKIE_OPTIONS: CookieSetOptions = {
  expires: new Date(DATE_TEN_YEARS_EXP),
  path: '/',
  secure: !IS_DEVELOPMENT
};
