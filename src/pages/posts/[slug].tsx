import * as React from 'react';
import classnames from 'classnames';
import { gql } from 'graphql-request';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

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
  const { post } = props;

  // Hooks
  const { query } = useRouter();

  // Setup
  const image = post.images[0].url;

  // Styles
  const cssComponent = classnames('ui-main', styles.component);

  // 🔌 Short Circuit
  if (!post) return null;

  return (
    <>
      <Head>
        <title>Slug | {SITE_TITLE}</title>
      </Head>

      <main className={cssComponent}>
        {image && <img alt="" src={image} />}
        <div className="ui-container-xl u-p-2x">
          <h1 className={styles.h1}>{query.slug}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.content.html }} />
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params = {} } = context;
  const QUERY = gql`
    {
      post(where: { slug: "${params.slug}" }) {
        content { html }
        createdAt
        images { url }
        title
        updatedAt
      }
    }
  `;

  const query = await graphcms.request(QUERY);
  const { post } = query;

  return {
    props: {
      post
    }
  };
};

export { Slug as default, Slug };
export type { SlugProps };
