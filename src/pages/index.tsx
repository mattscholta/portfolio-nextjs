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

              <h1 className="ui-heading">Opportunity awaits 🧑‍💻</h1>
              <sub className="ui-subhead" />

              <p>
                After <b>5+ great</b> years pushing the envelope at{' '}
                <a className="u-font-bold" href="https://thredup.com">
                  thredUP.com
                </a>{' '}
                the time has come for a new set of challenges. With a focus on
                front end development, user-experience, user-interaction and a
                passion for developer productivity I am beyond excited to see
                what opportunities the future holds.
              </p>

              <p>
                The technology and tools listed on this page are my preferred
                stack as of 2022. This year I'll be launching a new version of a
                long time project{' '}
                <a className="u-font-bold" href="https://barguide.io">
                  BarGuide.io
                </a>{' '}
                with all that <b>"free time"</b> I have. 🤣
              </p>

              <p>
                So, if you're interested in learning more, ask the nearest
                developer to help you find my <b>email address</b>. I've hidden
                it into the website, twice actually... Otherwise reach out and
                connect on LinkedIn.
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
