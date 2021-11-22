/**
 * @external https://github.com/kentcdodds/react-testing-library#global-configuration
 * @description Bit of configuration prior to running our test suite
 */
import '@testing-library/jest-dom/extend-expect';

/**
 * These are used to mock window.xxx methods
 */

/* eslint-disable-next-line @typescript-eslint/no-empty-function */
// const noop = () => {};

// Object.defineProperty(window, 'scrollTo', {
//   value: noop,
//   writable: true
// });
