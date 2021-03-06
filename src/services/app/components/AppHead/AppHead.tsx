import * as React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { SITE_TITLE } from '@src/config/constants';
import {
  BASE_URL,
  GOOGLE_ANALYTICS,
  GOOGLE_TAG_MANAGER
} from '@src/config/settings';
import { metadata } from '@src/services/seo/metadata';
import { GoogleAnalytics } from '@src/services/tracking/components/GoogleAnalytics';
import { GoogleTagManagerScript } from '@src/services/tracking/components/GoogleTagManagerScript';

export interface AppHeadProps {}

/**
 * @name AppHead
 * @description A simple component that we use to set the "base" information
 * used in our Document <head>. This can be further "extended" by any
 * sub-routes, this is simply a strong base
 */
export const AppHead = (_props: AppHeadProps) => {
  // Hooks
  const { pathname } = useRouter();

  // Setup
  const canonical = `${BASE_URL}${pathname}`;

  // Markup
  const renderMetaTag = (
    data: React.MetaHTMLAttributes<HTMLMetaElement>,
    index: number
  ) => {
    return <meta {...data} key={index} />;
  };

  return (
    <Head>
      <GoogleAnalytics id={GOOGLE_ANALYTICS} />
      <GoogleTagManagerScript id={GOOGLE_TAG_MANAGER} />
      <link href={canonical} rel="canonical" />
      <link href="/favicon.ico" rel="icon" />
      <link href="/images/icon.png" rel="apple-touch-icon" sizes="48x48" />
      <link href="/manifest.json" rel="manifest" />
      {metadata.map(renderMetaTag)}
      <title>{SITE_TITLE}</title>
    </Head>
  );
};
