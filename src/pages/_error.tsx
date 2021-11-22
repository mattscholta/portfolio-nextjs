import * as React from 'react';
import classnames from 'classnames';
import Head from 'next/head';

import { SITE_TITLE } from '@src/config/constants';

import styles from './_error.module.css';

interface ErrorPageProps {}

/**
 * @name ErrorPage
 * @description Simple 404 page
 */
const ErrorPage: React.FC<ErrorPageProps> = (_props) => {
  // Styles
  const cssComponent = classnames('ui-main', styles.component);

  return (
    <>
      <Head>
        <title>Page not found | {SITE_TITLE}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={cssComponent}>
        <p>Sorry, we couldn’t find the page you were looking for.</p>
      </main>
    </>
  );
};

export { ErrorPage, ErrorPage as default };
export type { ErrorPageProps };
