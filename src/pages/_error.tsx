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

  // Handlers
  const onClickRefresh = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.location.reload();
  };

  return (
    <>
      <Head>
        <title>Page not found | {SITE_TITLE}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={cssComponent}>
        <h1 className="ui-heading u-mb-2x">¯\_(ツ)_/¯</h1>
        <p>Sorry, we couldn’t find the page you were looking for.</p>
        <div className="u-flex">
          <a className="ui-link" href="/">
            Homepage
          </a>
          <span className="u-mx-1x">|</span>
          <a className="ui-link" href="/" onClick={onClickRefresh}>
            Try again
          </a>
        </div>
      </main>
    </>
  );
};

export { ErrorPage, ErrorPage as default };
export type { ErrorPageProps };
