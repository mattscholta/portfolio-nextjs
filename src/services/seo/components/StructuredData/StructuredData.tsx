import * as React from 'react';

interface StructuredDataProps {
  data: any;
}

/**
 * @name StructuredData
 * @external https://developers.google.com/search/docs/guides/intro-structured-data
 * @description Adds JavaScript notation embedded in a <script> tag for
 * SEO (JSON-LD format)
 */
const StructuredData: React.FC<StructuredDataProps> = (props) => {
  const { data } = props;

  // Setup
  const dataString = JSON.stringify(data);

  return (
    <script
      dangerouslySetInnerHTML={{ __html: dataString }}
      type="application/ld+json"
    />
  );
};

export { StructuredData };
export type { StructuredDataProps };
