import { IS_PRODUCTION, IS_TEST } from '@src/config/settings';
// import { scrollTop } from './scroll';

export interface Analytics {
  [key: string]: any;

  event: (
    category: string,
    action: string,
    label?: string,
    value?: number
  ) => void;
  history: (location: any, action: any) => void;
  hitWithCallback: (
    event: string,
    category: string,
    action: string,
    cbk: any
  ) => void;
  logger: (eventType: string, ...args: any[]) => void;
  outbound: (category: string, action: string, label: any) => void;
  page: (page: string) => void;
  social: (action: string, network: string, target: string) => void;
  timing: (category: string, variable: string, value: string) => void;
  vitals: (
    category: string,
    action: string,
    label: string,
    value: number
  ) => void;
}

/**
 * @description A wrapper around some of the common Google Analytics methods.
 * Having them here makes it easy to update any customizations we may have.
 */
const analytics: Analytics = {
  /**
   * @external https://developers.google.com/analytics/devguides/collection/analyticsjs/events
   * @description Events are user interactions with content that can be
   * tracked independently from a web page or a screen load. Downloads,
   * mobile ad clicks, gadgets, Flash elements, AJAX embedded elements,
   * and video plays are all examples of actions you might want to track
   * as Events.
   */
  event(category, action = 'click', label, value) {
    if (typeof (window as any).ga === 'undefined') return;

    const data: any = {
      eventAction: action,
      eventCategory: category,
      hitType: 'event'
    };

    if (label) data.eventLabel = label;
    if (value) data.eventValue = value;

    (window as any).ga('gtm2.send', data);

    analytics.logger('event', { action, category, label });
  },

  history(location: any, action: any) {
    const { pathname } = location;
    analytics.page(pathname);

    // if (action === 'PUSH') scrollTop();

    if (action === 'PUSH') {
      (window as any).scroll({ top: 0 });
    }
  },

  /**
   * @external https://goo.gl/nF3Lbg
   * @description A function that will be called after processing a hit. This
   * callback is designed to always be called, either directly after a hit is
   * sent successfully or when it has been determined that a hit cannot be sent
   * or has failed to send. No arguments are passed to the function when called.
   * You may want to avoid using hitcallBack to execute code that is critical to
   * your application since it's possible it may not get called in rare cases
   * (e.g. if the server doesn't respond or analytics.js fails to load). In this
   * case you can set a timeout to ensure execution.
   */
  hitWithCallback(event: string, category: string, action: string, cbk: any) {
    if (typeof (window as any).ga === 'undefined') return;

    if (typeof cbk !== 'function') {
      throw new Error('Callback function is required');
    }

    (window as any).ga('gtm2.send', event, category, action, {
      hitCallback: cbk
    });

    analytics.logger('hitWithCallback', { action, category, cbk, event });
  },

  /**
   * @description Friendly logger for development
   */
  logger(...args) {
    const isEnabled = !IS_PRODUCTION && !IS_TEST;
    // const isEnabled = false;

    if (isEnabled) console.table(args); // eslint-disable-line no-console
  },

  /**
   * @external https://goo.gl/8NDM1
   * @description Tracking outbound links and forms can be tricky because most
   * browsers will stop executing JavaScript on the current page once a new page
   * starts to load. One solution to this problem is to set the transport field
   * to beacon:
   */
  outbound(category: string, action = 'click', label: any = null) {
    if (typeof (window as any).ga === 'undefined') return;

    (window as any).ga('gtm2.send', {
      eventAction: action,
      eventCategory: category,
      eventLabel: label,
      hitType: 'event',
      transport: 'beacon'
    });

    analytics.logger('outbound', { action, category, label });
  },

  /**
   * @external https://goo.gl/bLSBW
   * @description Page tracking allows you to measure the number of views you
   * had for a particular page on your website. Pages often correspond to an
   * entire HTML document, but they can also represent dynamically loaded
   * content; this is known as "virtual pageviews".
   */
  page(page: string) {
    if (typeof (window as any).ga === 'undefined') return;

    (window as any).ga('gtm2.send', {
      hitType: 'pageview',
      page
      // sessionControl: 'start',
    });

    analytics.logger('page', { page });
  },

  /**
   * @external https://goo.gl/ruV5k7
   * @description You can use social interaction analytics to measure the number
   * of times users click on social buttons embedded in webpages. For example,
   * you might measure a Facebook "Like" or a Twitter "Tweet".
   */
  social(action: string, network: string, target: string) {
    if (typeof (window as any).ga === 'undefined') return;

    (window as any).ga('gtm2.send', {
      hitType: 'social',
      socialAction: action,
      socialNetwork: network,
      socialTarget: target
    });

    analytics.logger('social', { action, network, target });
  },

  /**
   * @external https://goo.gl/OtEtPi
   * @description When sending user timing data, you specify the amount of
   * milliseconds spent in the timingValue parameter. It’s up to you to write
   * code to capture this period of time.
   */
  timing(category: string, variable: string, value: string) {
    if (typeof (window as any).ga === 'undefined') return;

    (window as any).ga('gtm2.send', {
      hitType: 'timing',
      timingCategory: category,
      timingValue: value,
      timingVar: variable
    });

    analytics.logger('timing', { category, value, variable });
  },

  /**
   * @external https://goo.gl/OtEtPi
   * @description When sending user timing data, you specify the amount of
   * milliseconds spent in the timingValue parameter. It’s up to you to write
   * code to capture this period of time.
   */
  vitals(category: string, action: string, label: string, value: number) {
    if (typeof (window as any).ga === 'undefined') return;

    const data: any = {
      eventAction: action,
      eventCategory: category,
      eventLabel: label,
      eventValue: value,
      hitType: 'event'
    };

    (window as any).ga('gtm2.send', data);

    analytics.logger('event', data);
  }
};

export { analytics };
