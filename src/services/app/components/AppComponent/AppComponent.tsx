import * as React from 'react';
import { ToastContainer } from 'react-toastify';
import { RecoilRoot } from 'recoil';

import { Footer } from '@src/components/Footer/Footer';
import { Header } from '@src/components/Header/Header';
import { AppHead } from '@src/services/app/components/AppHead';
import { AppLifeCycle } from '@src/services/app/components/AppLifeCycle';
import { AppLoader } from '../AppLoader/AppLoader';

export interface AppComponentProps {
  global: any;
  pageProps: any;
}

/**
 * @name AppComponent
 * @description This component is responsible for initializing our application.
 * We've nested it so that the app can make use of any cookies which are set
 * as props to our page components.
 */
export const AppComponent: React.FC<AppComponentProps> = (props) => {
  const { children, global: _global } = props;

  // Setup
  // const initialState: AppState = {
  //   ...global,
  //   loading: false,
  //   navigation: {
  //     open: true
  //   }
  // };

  // function initializeState({ set }: MutableSnapshot) {
  //   set(appAtom, initialState);
  // }

  return (
    <RecoilRoot>
      {/* <RecoilRoot initializeState={initializeState}> */}
      <AppHead />
      <AppLifeCycle />
      <AppLoader />
      <Header />
      {children}
      <Footer />
      <ToastContainer />
    </RecoilRoot>
  );
};
