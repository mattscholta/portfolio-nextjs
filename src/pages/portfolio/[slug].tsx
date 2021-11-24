import * as React from 'react';
import classnames from 'classnames';
import { gql } from 'graphql-request';
import { GetServerSideProps } from 'next';
import app from 'next/app';
import Head from 'next/head';
import { useRecoilState, useRecoilValue } from 'recoil';

import { BlockQuote } from '@src/components/BlockQuote';
import { SITE_TITLE } from '@src/config/constants';
import { appAtom } from '@src/recoil/atoms/app';
import { graphcms } from '@src/utils/graphcms';

import styles from './[slug].module.css';

interface SlugProps {
  data: any;
  error?: any;
}

/**
 * @name Slug
 * @description Application landing page (homepage)
 */
const Slug: React.FC<SlugProps> = (props) => {
  const { data, error } = props;

  // Styles
  const tailwind = `u-flex u-flex-center u-flex-justify-center`;
  const cssComponent = classnames('ui-main', styles.component);
  const cssHeading = classnames('ui-heading', styles.heading);
  const cssImage = classnames('image-featured', tailwind, styles.image);

  // 🔌 Short Circuit
  if (error) {
    return <div className="ui-main ui-container-xl">{error}</div>;
  }

  if (!data) {
    return (
      <div className="ui-container-lg ui-main u-mt-4x">No data found...</div>
    );
  }

  // Setup
  const image = data.images[0]?.url ?? {};
  const style = {
    backgroundImage: `url(${image})`,
    backgroundPosition: 'center'
  };

  return (
    <>
      <Head>
        <title>
          {data.company} {data.title} | {SITE_TITLE}
        </title>
      </Head>

      <main className={cssComponent}>
        {image && <div className={cssImage} style={style} />}
        <div className="ui-container-lg u-p-2x">
          <BlockQuote className="u-mt-2x" simple={true}>
            {data.intro}
            <cite>- {data.company}</cite>
          </BlockQuote>
          <h1 className={cssHeading}>{data.title}</h1>
          <div
            className="wysiwyg"
            dangerouslySetInnerHTML={{ __html: data.content.html }}
          />
          <hr />
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
        company
        content { html }
        id
        images { url }
        intro
        slug
        title
      }
    }
  `;

  try {
    const query = await graphcms.request(QUERY);
    const { portfolios } = query;

    return {
      props: {
        data: portfolios[0] ?? null
      }
    };
  } catch (error: any) {
    return {
      props: {
        error: error.message
      }
    };
  }
};

export { Slug as default, Slug };
export type { SlugProps };
