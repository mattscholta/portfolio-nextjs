import * as React from 'react';
import classnames from 'classnames';
import { gql } from 'graphql-request';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { BlogPreviewRow } from '@src/components/BlogPreviewRow/BlogPreviewRow';
import { SITE_TITLE } from '@src/config/constants';
import { graphcms } from '@src/utils/graphcms';

import styles from './[slug].module.css';

interface SlugProps {
  post: any;
}

/**
 * @name Slug
 * @description Application landing page (homepage)
 */
const Slug: React.FC<SlugProps> = (props) => {
  const { post, related } = props;

  // Setup
  const image = post.images[0].url;
  const style = { backgroundImage: `url(${image})` };

  // Styles
  const tailwind = `u-flex u-flex-center u-flex-justify-center`;
  const cssComponent = classnames('ui-main', styles.component);
  const cssHeading = classnames('ui-heading', styles.heading);
  const cssImage = classnames('image-featured', tailwind, styles.image);

  const renderRelatedPosts = (post: any) => (
    <BlogPreviewRow
      className={styles.post}
      key={post.slug}
      post={post}
      small={true}
    />
  );

  // 🔌 Short Circuit
  if (!post) return null;

  return (
    <>
      <Head>
        <title>
          {post.title} | {SITE_TITLE}
        </title>
      </Head>

      <main className={cssComponent}>
        {image && <div className={cssImage} style={style} />}
        <div className="ui-container-xl u-p-2x">
          <h1 className={cssHeading}>{post.title}</h1>
          <div className="u-flex u-flex-col u-gap-4x md:u-gap-10x md:u-flex-row">
            <div
              className="wysiwyg"
              dangerouslySetInnerHTML={{ __html: post.content.html }}
            />
            <aside className={styles.sidebar}>
              {related.map(renderRelatedPosts)}
            </aside>
          </div>
        </div>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params = {} } = context;
  const QUERY = gql`
    {
      post(where: { slug: "${params.slug}" }) {
        content { html }
        createdAt
        images { url }
        imageTemp
        title
        updatedAt
      }

      posts(where: { sticky: true }) {
        images { url }
        slug
        sticky
        title
      }
    }
  `;

  const query = await graphcms.request(QUERY);
  const { post, posts } = query;
  console.log(` 💬 ~ post`, post);

  return {
    props: {
      post,
      related: posts
    }
  };
};

export { Slug as default, Slug };
export type { SlugProps };
