import { setCookie } from '../cookies';

describe('cookies', () => {
  beforeAll(() => {
    // window.gtag = gtag;
  });

  it('setCookie', () => {
    expect(true).toBeTruthy();
    expect(typeof setCookie).toBe('function');
  });
});
