import { MutableSnapshot } from 'recoil';

/**
 * These guys are used in a handful of places and are complex enough that
 * we want to make these easy to type.
 */
export type GenericTrackingParams = Gtag.ControlParams | Gtag.EventParams | Gtag.CustomParams; // prettier-ignore
export type RecoilInitializer = (snapshot: MutableSnapshot) => void;

/**
 * @name trackingEvent
 * @external https://developers.google.com/gtagjs/reference/apie
 * @description The events available are some of what we get for free
 * with GA now, please have a look at the link above to see what params
 * apply to the event you're looking to use.
 */

/**
 * Now we have all our application customizations
 */
export interface Mobile {
  open: boolean;
}

export interface Modal {
  content: string;
  open: boolean;
}

export interface User {
  email?: string;
  name?: string;
  username?: string;
  visitor: boolean;
}
