import * as React from 'react';
import classnames from 'classnames';
import Head from 'next/head';
import Link from 'next/link';

import { ConnectOnline } from '@src/components/ConnectOnline';
import { DevelopmentStack } from '@src/components/DevelopmentStack';
import { WorkHistory } from '@src/components/WorkHistory';
import { CLIENT_CLOUDINARY, SITE_TITLE } from '@src/config/constants';
import { getSrcSet } from '@src/utils/links';

import styles from './index.module.css';

interface IndexProps {
  posts: any[];
}

/**
 * @name Index
 * @description Application landing page (homepage)
 */
const Index: React.FC<IndexProps> = (props) => {
  const { posts: _posts } = props;

  // Setup
  const img = `${CLIENT_CLOUDINARY}/v1616195587/mattscholta/general/coast_1500.webp`;
  const sources = getSrcSet(img);

  // Styles
  const cssComponent = classnames('ui-main', styles.component);

  return (
    <>
      <Head>
        <title>About | {SITE_TITLE}</title>
      </Head>

      <main className={cssComponent}>
        <div className="ui-container-xl u-p-2x">
          <div className="ui-reflow">
            <div className={styles.left}>
              <blockquote style={{ maxWidth: '85%' }}>
                A <em>Software Engineer</em> passionate about{' '}
                <b>quality code</b> written for <b>humans</b>, unlocking{' '}
                <b>developer productivity</b>, and creating delightful{' '}
                <b>user experiences</b>.<cite>- Matthew Scholta</cite>
              </blockquote>
              <img
                alt="The California Coast"
                className={styles.hero}
                height={500}
                loading="eager"
                sizes="(min-width: 768px) 60vw, 100vw"
                src={img}
                srcSet={sources}
                title="Life's a beach, work hard and play in the sand!"
                width={1500}
              />

              <h2 className="ui-heading">Opportunity awaits 🧑‍💻</h2>
              <sub className="ui-subhead" />

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae a saepe cumque atque ducimus corrupti accusamus
                voluptas qui libero temporibus facilis eos autem, sint fugiat
                voluptatem ex, quaerat nulla incidunt.
              </p>
              <Link href="/portfolio">
                <a className={styles.link}>View Portfolio &#8594;</a>
              </Link>
            </div>

            <div className="ui-spacer" />

            <aside className={styles.right}>
              <ConnectOnline />
              <WorkHistory />
              <DevelopmentStack />
            </aside>
          </div>
        </div>
      </main>
    </>
  );
};

export { Index as default, Index };
export type { IndexProps };
