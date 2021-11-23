import * as React from 'react';
import classnames from 'classnames';
import { gql } from 'graphql-request';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { SITE_TITLE } from '@src/config/constants';
import { graphcms } from '@src/utils/graphcms';

import styles from './[slug].module.css';

interface SlugProps {
  data: any;
}

/**
 * @name Slug
 * @description Application landing page (homepage)
 */
const Slug: React.FC<SlugProps> = (props) => {
  const { data } = props;

  console.log(` 💬 ~ data`, data);

  // Styles
  const cssComponent = classnames('ui-main', styles.component);

  // 🔌 Short Circuit
  if (!data) {
    return (
      <div className="ui-container-xl ui-main u-mt-4x">No data found...</div>
    );
  }

  return (
    <>
      <Head>
        <title>
          {data.title} | {SITE_TITLE}
        </title>
      </Head>

      <main className={cssComponent}>
        <div className="ui-container-xl u-p-2x">
          <h1 className={styles.h1}>{data.title}</h1>
          <div
            className="wysiwyg"
            dangerouslySetInnerHTML={{ __html: data.content.html }}
          />
        </div>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params = {} } = context;
  const QUERY = gql`
    {
      portfolios (where: { slug: "${params.slug}" }) {
        content { html }
        id
        slug
        title
      }
    }
  `;

  const query = await graphcms.request(QUERY);
  const { portfolios } = query;

  return {
    props: {
      data: portfolios[0] ?? null
    }
  };
};

export { Slug as default, Slug };
export type { SlugProps };
