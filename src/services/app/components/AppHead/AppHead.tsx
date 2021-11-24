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

interface AppHeadProps {}

/**
 * @name AppHead
 * @description A simple component that we use to set the "base" information
 * used in our Document <head>. This can be further "extended" by any
 * sub-routes, this is simply a strong base
 */
const AppHead: React.FC<AppHeadProps> = (_props) => {
  // Hooks
  const { pathname } = useRouter();

  // Setup
  const canonical = `${BASE_URL}${pathname}`;

  // Markup
  const renderMetaTag = (
    props: React.MetaHTMLAttributes<HTMLMetaElement>,
    index: number
  ) => <meta {...props} key={index} />;

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

export { AppHead };
export type { AppHeadProps };
