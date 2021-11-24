import * as React from 'react';
import classnames from 'classnames';
import { gql } from 'graphql-request';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { PreviewCard } from '@src/components/PreviewCard';
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
  const cssComponent = classnames('ui-container-xl ui-main', styles.component);
  const cssCards = classnames('u-flex u-flex-wrap', styles.cards);

  // Markup
  const renderPreview = (node: any) => {
    const { overview, slug, thumbnailTemp, title } = node;

    return (
      <PreviewCard
        description={overview}
        image={thumbnailTemp}
        key={slug}
        slug={slug}
        title={title}
      />
    );
  };

  // 🔌 Short Circuit
  if (error) {
    console.log(` 💬 ~ error`, error);
    return <div className="ui-main ui-container-xl">{error}</div>;
  }

  return (
    <>
      <Head>
        <title>Index | {SITE_TITLE}</title>
      </Head>

      <div className={cssComponent}>
        <h1 className="u-visually-hidden">ListV2</h1>
        <div className={cssCards}>{data.map(renderPreview)}</div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (_context) => {
  const QUERY = gql`
    {
      portfolios {
        overview
        slug
        title
        thumbnailTemp
      }
    }
  `;

  try {
    const query = await graphcms.request(QUERY);
    const { portfolios } = query;

    return {
      props: { data: portfolios }
    };
  } catch (error: any) {
    return {
      props: { error: error.message }
    };
  }
};

export { Index as default, Index };
export type { IndexProps };
