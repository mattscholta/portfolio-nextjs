import * as React from 'react';
import classnames from 'classnames';
import { gql } from 'graphql-request';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { BlogPreviewColumn } from '@src/components/BlogPreviewColumn';
import { SITE_TITLE } from '@src/config/constants';
import { graphcms } from '@src/utils/graphcms';

import styles from './index.module.css';

interface IndexProps {
  data: any[];
  error?: any;
}

/**
 * @name Index
 * @description Application landing page (homepage)
 */
const Index: React.FC<IndexProps> = (props) => {
  const { data, error } = props;

  // Styles
  const cssComponent = classnames('ui-main', styles.component);
  const cssHeading = classnames('u-visually-hidden', styles.heading);
  const cssPreviews = classnames('u-flex u-flex-wrap', styles.previews);

  // Markup
  const renderPreview = (post: any) => {
    const { slug } = post;

    return (
      <BlogPreviewColumn
        className={styles.preview}
        key={slug}
        post={post}
        small={false}
      />
    );
  };

  // 🔌 Short Circuit
  if (error) {
    return <div className="ui-main ui-container-xl">{error}</div>;
  }

  return (
    <>
      <Head>
        <title>Lessons learned, and other development related ramblings.</title>
      </Head>

      <main className={cssComponent}>
        <div className="ui-container-xl">
          <h1 className={cssHeading}>A Developers Ramblings</h1>
          <br />
          <blockquote className="u-px-2x">
            Always leave the <span className="u-line-through">campground</span>{' '}
            <b>code</b> cleaner than you found it. 🏕️
            <cite>A Developers Ramblings</cite>
          </blockquote>

          <aside className={cssPreviews}>
            {data.map(renderPreview)}
            {/* <BlogDisclaimer /> */}
            {/* {related && related.map(renderRelatedPosts)} */}
            {/* <BlogSharing /> */}
          </aside>
        </div>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (_context) => {
  const QUERY = gql`
    {
      posts {
        id
        imageTemp
        sticky
        slug
        title
      }
    }
  `;

  try {
    const query = await graphcms.request(QUERY);
    const { posts } = query;

    return {
      props: { data: posts }
    };
  } catch (error: any) {
    return {
      props: { error: error.message }
    };
  }
};

export { Index as default, Index };
export type { IndexProps };
