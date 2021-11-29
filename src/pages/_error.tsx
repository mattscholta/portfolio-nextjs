import * as React from 'react';
import Head from 'next/head';

import { SITE_TITLE } from '@src/config/constants';
import { AppErrorMessage } from '@src/services/app/components/AppErrorMessage';

interface ErrorPageProps {}

/**
 * @name ErrorPage
 * @description Simple 404 page
 */
const ErrorPage: React.FC<ErrorPageProps> = (_props) => {
  return (
    <>
      <Head>
        <title>Page not found | {SITE_TITLE}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppErrorMessage
        className="ui-main"
        message="Sorry, we couldn't find the page you were looking for."
      />
    </>
  );
};

export { ErrorPage, ErrorPage as default };
export type { ErrorPageProps };
