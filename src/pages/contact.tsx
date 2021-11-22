import * as React from 'react';
import classnames from 'classnames';
import Head from 'next/head';

import {
  SITE_EMAIL_ADDRESS,
  SITE_EMAIL_LINK,
  SITE_TITLE
} from '@src/config/constants';

import styles from './contact.module.css';

interface ContactProps {}

/**
 * @name Contact
 * @description Application landing page (homepage)
 */
const Contact: React.FC<ContactProps> = (_props) => {
  // Styles
  const cssComponent = classnames('ui-main', styles.component);

  // Markup
  const renderedEmail = (
    <a className="ui-link" href={SITE_EMAIL_LINK}>
      {SITE_EMAIL_ADDRESS}
    </a>
  );

  return (
    <>
      <Head>
        <title>Contact | {SITE_TITLE}</title>
      </Head>

      <main className={cssComponent}>
        <div className="ui-container-xl u-p-2x">
          <h1 className={styles.h1}>Contact Info</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis saepe
            ut magni id deserunt labore dignissimos at quas asperiores ipsum ab
            quos accusamus praesentium atque magnam recusandae distinctio,
            tempore voluptatum?
          </p>
          <p>Contact Jax at {renderedEmail}...</p>
        </div>
      </main>
    </>
  );
};

export { Contact as default, Contact };
export type { ContactProps };
