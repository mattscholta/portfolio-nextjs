/**
 * @name isMobileDevice
 * @external https://dev.to/timhuang/a-simple-way-to-detect-if-browser-is-on-a-mobile-device-with-javascript-44j3
 */
export const isMobileDevice = (): boolean => {
  const mobile = /Android|BlackBerry|IEMobile|iPad|iPhone|iPod|Opera Mini|webOS/i; // prettier-ignore

  if (mobile.test(navigator.userAgent)) return true;

  return false;
};
