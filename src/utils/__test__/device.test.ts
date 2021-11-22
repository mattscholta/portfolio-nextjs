import { isMobileDevice } from '../device';

describe('device', () => {
  beforeAll(() => {
    // window.gtag = gtag;
  });

  it('isMobileDevice', () => {
    expect(typeof isMobileDevice).toBe('function');
  });
});
