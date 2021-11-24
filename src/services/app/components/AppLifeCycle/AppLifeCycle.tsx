import * as React from 'react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';

import { appAtom } from '@src/recoil/atoms/app';
import { setTrackingDefaults } from '@src/utils/tracking';

interface AppLifeCycleProps {}

/**
 * @name AppLifeCycle
 * @description We use this component to mount any Application specific
 * logic that we need to initialize 1 time only while still having access to
 * both Apollo and Recoil state.
 *
 * We're using it for mount and un-mount
 */
const AppLifeCycle: React.FC<AppLifeCycleProps> = (_props) => {
  const [app, setApp] = useRecoilState(appAtom);
  const { events } = useRouter();

  // Life Cycle
  React.useEffect(() => {
    events.on('routeChangeStart', () => {
      setApp({ ...app, loading: true });
    });

    events.on('routeChangeComplete', () => {
      setApp({ ...app, loading: false });
    });
  }, []);

  React.useEffect(() => {
    setTrackingDefaults();
  }, []);

  return null;
};

export { AppLifeCycle };
export type { AppLifeCycleProps };
