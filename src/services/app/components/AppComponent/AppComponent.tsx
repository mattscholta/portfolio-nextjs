import * as React from 'react';
import { ToastContainer } from 'react-toastify';
import { MutableSnapshot, RecoilRoot } from 'recoil';

import { Footer } from '@src/components/Footer/Footer';
import { Header } from '@src/components/Header/Header';
import { NavigationFooter } from '@src/components/NavigationFooter';
import { NavigationHeader } from '@src/components/NavigationHeader';
import { appAtom, AppState } from '@src/recoil/atoms/app';
import { AppHead } from '@src/services/app/components/AppHead';
import { AppLifeCycle } from '@src/services/app/components/AppLifeCycle';

interface AppComponentProps {
  global: any;
  pageProps: any;
}

/**
 * @name AppComponent
 * @description This component is responsible for initializing our application.
 * We've nested it so that the app can make use of any cookies which are set
 * as props to our page components.
 */
const AppComponent: React.FC<AppComponentProps> = (props) => {
  const { children, global } = props;

  // Setup
  const initialState: AppState = { ...global, loading: false };

  function initializeState({ set }: MutableSnapshot) {
    set(appAtom, initialState);
  }

  return (
    <RecoilRoot initializeState={initializeState}>
      <AppHead />
      <AppLifeCycle />
      {/* <NavigationHeader /> */}
      <Header
        navigation={{}}
        navigationToggle={() => {
          console.log('asfdasfd');
        }}
      />
      {children}
      <Footer />
      {/* <NavigationFooter /> */}
      <ToastContainer />
    </RecoilRoot>
  );
};

export { AppComponent };
export type { AppComponentProps };
