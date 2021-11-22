import {
  setTrackingDefaults,
  setUser,
  trackingError,
  trackingEvent
} from '../tracking';

describe('tracking', () => {
  const gtag = jest.fn();

  beforeAll(() => {
    window.gtag = gtag;
  });

  beforeEach(() => {
    gtag.mockReset();
  });

  it('setTrackingDefaults', () => {
    expect(gtag).toHaveBeenCalledTimes(0);
    setTrackingDefaults();
    expect(gtag).toHaveBeenCalledWith('set', {
      country: 'US',
      currency: 'USD'
    });
  });

  it('setUser', () => {
    const payload = {
      method: 'email'
    };

    expect(gtag).toHaveBeenCalledTimes(0);
    setUser(payload);
    expect(gtag).toHaveBeenCalledWith('set', 'user_properties', payload);
  });

  it('trackingEvent', () => {
    const action = 'login';
    const payload = {
      information: 'we need to set custom metrics up in the dashboard too'
    };

    expect(gtag).toHaveBeenCalledTimes(0);
    trackingEvent(action, payload);
    expect(gtag).toHaveBeenCalledWith('event', action, payload);
  });

  it('trackingError', () => {
    const payload = {
      description: 'sample exception',
      fatal: true
    };

    expect(gtag).toHaveBeenCalledTimes(0);
    trackingError(payload);
    expect(gtag).toHaveBeenCalledWith('event', 'exception', payload);
  });
});
