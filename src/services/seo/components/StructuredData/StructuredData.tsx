import * as React from 'react';

export interface StructuredDataProps {
  data: any;
}

/**
 * @name StructuredData
 * @external https://developers.google.com/search/docs/guides/intro-structured-data
 * @description Adds JavaScript notation embedded in a <script> tag for
 * SEO (JSON-LD format)
 */
export const StructuredData = (props: StructuredDataProps) => {
  const { data } = props;

  // Setup
  const dataString = JSON.stringify(data);

  console.log(` 💬 ~ dataString`, dataString);

  return (
    <script
      dangerouslySetInnerHTML={{ __html: dataString }}
      type="application/ld+json"
    />
  );
};
