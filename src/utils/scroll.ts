/**
 * @external https://www.npmjs.com/package/smoothscroll-polyfill
 * @external http://iamdustan.com/smoothscroll/
 * @description We have a polyfill in place ~ tiny, at 1.4kb minified + gzip
 */
const scrollLeft = (left = 0) => {
  window.scroll({
    behavior: 'smooth',
    left
  });
};

const scrollTo = (key: string, value: number) => {
  window.scroll({
    behavior: 'smooth',
    [key]: value
  });
};

const scrollTop = (top = 0) => {
  window.scroll({
    behavior: 'smooth',
    top
  });
};

export { scrollLeft, scrollTo, scrollTop };
