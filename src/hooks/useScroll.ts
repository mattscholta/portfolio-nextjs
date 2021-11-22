import { useEffect } from 'react';
import throttle from 'lodash/throttle';

/**
 * @name useScroll
 * @description Pass this hook a callback to be fired in a
 * throttled callback/handler
 */
const useScroll = (callback: () => void): void => {
  // Setup
  const throttledCallback = throttle(callback, 100, {
    leading: true,
    trailing: true
  });

  // Life Cycle
  useEffect(() => {
    window.addEventListener('scroll', throttledCallback);

    callback();

    return () => {
      window.removeEventListener('scroll', throttledCallback);
    };
  }, []);
};

export { useScroll };
