import * as React from 'react';

export interface GoogleAnalyticsProps {
  id: string;
}

/**
 * @name GoogleAnalytics
 * @external https://tagmanager.google.com/
 * @description GTM requires a two part implementation, this script is
 * responsible for loading GTM which loads our Tags and Pixels
 */
export const GoogleAnalytics = (props: GoogleAnalyticsProps) => {
  const { id } = props;

  // Setup
  const __html = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${id}');
  `;

  return <script dangerouslySetInnerHTML={{ __html }} type="text/javascript" />;
};
