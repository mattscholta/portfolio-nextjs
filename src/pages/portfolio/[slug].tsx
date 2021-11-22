import * as React from 'react';
import classnames from 'classnames';
import Head from 'next/head';

import { SITE_TITLE } from '@src/config/constants';

import styles from './[slug].module.css';

interface SlugProps {}

/**
 * @name Slug
 * @description Application landing page (homepage)
 */
const Slug: React.FC<SlugProps> = (_props) => {
  // Styles
  const cssComponent = classnames('ui-main', styles.component);

  return (
    <>
      <Head>
        <title>Slug | {SITE_TITLE}</title>
      </Head>

      <main className={cssComponent}>
        <div className="ui-container-xl u-p-2x">
          <h1 className={styles.h1}>Slug</h1>
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

export { Slug as default, Slug };
export type { SlugProps };
