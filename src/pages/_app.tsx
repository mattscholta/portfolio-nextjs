import * as React from 'react';
import { CookiesProvider } from 'react-cookie';
import type { AppContext, AppProps } from 'next/app';
import App from 'next/app';
import parser from 'ua-parser-js';
import Cookies from 'universal-cookie';

import { intro } from '@src/config/intro';
import { IS_BROWSER } from '@src/config/settings';
import { AppComponent } from '@src/services/app/components/AppComponent';

// import { checkBasicAuth } from '@src/utils/auth';
import '@src/styles/index.css';

interface ApplicationProps extends AppProps {
  cookies: Record<string, any>;
  global: any;
}

/**
 * @name Application
 * @external https://nextjs.org/docs/advanced-features/custom-app
 * @description Next.js uses the App component to initialize pages.
 * You can override it and control the page initialization.
 */
const Application: React.FC<ApplicationProps> = (props, _context) => {
  const { cookies, global, Component, pageProps } = props;

  // Setup
  const cookieData = new Cookies(cookies);
  const cookieProps = IS_BROWSER ? {} : { cookies: cookieData };

  // Life Cycle
  React.useEffect(() => {
    intro();
  }, []);

  return (
    <CookiesProvider {...cookieProps}>
      <AppComponent global={global} pageProps={pageProps}>
        <Component {...pageProps} />
      </AppComponent>
    </CookiesProvider>
  );
};

/**
 * Only uncomment this method if you have blocking data requirements for
 * every single page in your application. This disables the ability to
 * perform automatic static optimization, causing every page in your app to
 * be server-side rendered.
 *
 * We connect to our GraphQL instance, potentially, on any page. This means
 * that any of our `useQuery` or `useMutation` actions will execute on the
 * server side, so we have to make our cookies available to the server
 */
(Application as any).getInitialProps = async (appContext: AppContext) => {
  const { ctx } = appContext;
  const { req, res: _res } = ctx;

  // Setup
  const cookies = IS_BROWSER ? document.cookie : (req as any)?.cookies ?? {};
  const global = {};
  const userAgent = req?.headers['user-agent'] ?? '';
  const ua = parser(userAgent);

  // Check auth will call res.end if password not matching.
  // if (req && res) checkBasicAuth(req, res);

  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps, cookies, global, ua };
};

export { Application, Application as default };
export type { ApplicationProps };
