import * as React from 'react';
import classnames from 'classnames';
import { gql } from 'graphql-request';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { PreviewCard } from '@src/components/PreviewCard';
import { SITE_TITLE } from '@src/config/constants';
import { data as portfolio } from '@src/data/portfolio';
import { graphcms } from '@src/utils/graphcms';

import styles from './index.module.css';

interface IndexProps {
  portfolios: any[];
}

/**
 * @name Index
 * @description Application landing page (homepage)
 */
const Index: React.FC<IndexProps> = (props) => {
  const { portfolios } = props;
  console.log(` 💬 ~ portfolios`, portfolios);

  // Styles
  const cssComponent = classnames('ui-container-xl ui-main', styles.component);
  const cssCards = classnames('u-flex u-flex-wrap', styles.cards);

  // Markup
  const renderPreview = (node: any) => {
    const { slug } = node;

    return <PreviewCard data={node} key={slug} />;
  };

  return (
    <>
      <Head>
        <title>Index | {SITE_TITLE}</title>
      </Head>

      <div className={cssComponent}>
        <h1 className="u-visually-hidden">ListV2</h1>
        <div className={cssCards}>{portfolio.map(renderPreview)}</div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (_context) => {
  const QUERY = gql`
    {
      portfolios {
        id
      }
    }
  `;

  const query = await graphcms.request(QUERY);
  const { portfolios } = query;

  return {
    props: { portfolios }
  };
};

export { Index as default, Index };
export type { IndexProps };
