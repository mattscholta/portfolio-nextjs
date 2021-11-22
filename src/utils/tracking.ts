import { IS_PRODUCTION_ENV, IS_TEST } from '@src/config/settings';
import { GenericTrackingParams } from '@src/types';
import { logger } from '@src/utils/logger';

// Anything that's not production
const USE_LOGGER = !IS_PRODUCTION_ENV && !IS_TEST;

/**
 * @name setTrackingDefaults
 * @external https://developers.google.com/gtagjs/devguide/configure#send_data_on_every_event_with_set
 * @description Send data with every call, we run this when the application
 * initializes on mount.
 */
export const setTrackingDefaults = (): void => {
  const defaults = {
    country: 'US',
    currency: 'USD'
  };

  if (USE_LOGGER) logger.info(defaults, `🧰 Tracking defaults`);

  window.gtag('set', defaults);
};

/**
 * @name setUser
 * @external https://developers.google.com/gtagjs/reference/api
 * @description Applying some user information for the users session will
 * allow us deeper insights into our users behavior
 */
export const setUser = (config: Gtag.CustomParams | boolean): void => {
  if (USE_LOGGER) logger.info({ config }, `🦸‍♀ User configuration`);

  window.gtag('set', 'user_properties', config);
};

/**
 * @name trackingError
 * @external https://developers.google.com/analytics/devguides/collection/ga4/exceptions
 * @description Tracking errors in analytics didn't make sense in the v3
 * application in the past, however as this is an included event type we
 * can make use of it for free. This data could prove very useful when we
 * look at it with other metrics like conversions or profits.
 */
export const trackingError = (params: {
  description?: string;
  fatal?: boolean;
}): void => {
  if (USE_LOGGER) logger.error(params, `🚨 Tracking error`);

  window.gtag('event', 'exception', params);
};

export const trackingEvent = <T = GenericTrackingParams>(
  type: Gtag.EventNames,
  params: T
): void => {
  if (USE_LOGGER) logger.info({ params }, `🎟️ Tracking event "${type}"`);

  window.gtag('event', type, params);
};
