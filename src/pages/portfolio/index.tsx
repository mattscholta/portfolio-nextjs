import * as React from 'react';
import classnames from 'classnames';
import Head from 'next/head';

import { SITE_TITLE } from '@src/config/constants';

import styles from './index.module.css';

interface IndexProps {}

/**
 * @name Index
 * @description Application landing page (homepage)
 */
const Index: React.FC<IndexProps> = (_props) => {
  // Styles
  const cssComponent = classnames('ui-main', styles.component);

  return (
    <>
      <Head>
        <title>Index | {SITE_TITLE}</title>
      </Head>

      <main className={cssComponent}>
        <div className="ui-container-xl u-p-2x">
          <h1 className={styles.h1}>Index</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis saepe
            ut magni id deserunt labore dignissimos at quas asperiores ipsum ab
            quos accusamus praesentium atque magnam recusandae distinctio,
            tempore voluptatum?
          </p>
        </div>
      </main>
    </>
  );
};

export { Index as default, Index };
export type { IndexProps };
