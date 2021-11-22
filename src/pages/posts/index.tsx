import * as React from 'react';
import classnames from 'classnames';
import { gql } from 'graphql-request';
import Head from 'next/head';

import { BlogPreviewColumn } from '@src/components/BlogPreviewColumn';
import { SITE_TITLE } from '@src/config/constants';
import { graphcms } from '@src/utils/graphcms';

import styles from './index.module.css';

interface IndexProps {
  posts: any[];
}

/**
 * @name Index
 * @description Application landing page (homepage)
 */
const Index: React.FC<IndexProps> = (props) => {
  const { posts } = props;
  console.log(` 💬 ~ props`, props);

  // Styles
  const cssComponent = classnames('ui-main', styles.component);
  const cssHeading = classnames('u-visually-hidden', styles.heading);

  // Markup
  const renderPreview = (post: any, index: number) => {
    const { slug } = post;
    const key = `${slug}-${index}`;

    return (
      <BlogPreviewColumn
        className={styles.preview}
        key={key}
        post={post}
        small={false}
      />
    );
  };

  return (
    <>
      <Head>
        <title>Index | {SITE_TITLE}</title>
      </Head>

      <main className={cssComponent}>
        <div className="ui-container-xl u-p-2x">
          <h1 className={cssHeading}>A Developers Ramblings</h1>

          <blockquote>
            Always leave the campground code cleaner than you found it. 🏕️
            <cite>A Developers Ramblings</cite>
          </blockquote>

          <section className="u-flex u-flex-wrap">
            {posts.map(renderPreview)}
          </section>

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

const QUERY = gql`
  {
    posts {
      id
      imageTemp
      title
      # content {
      #   html
      # }
    }
  }
`;

export async function getStaticProps() {
  const query = await graphcms.request(QUERY);
  const { posts } = query;

  return {
    props: {
      posts
    }
  };
}

export { Index as default, Index };
export type { IndexProps };
