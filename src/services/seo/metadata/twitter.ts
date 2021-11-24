import { Metadata } from './index';

const getTwitterMeta = (
  data: Metadata
): React.MetaHTMLAttributes<HTMLMetaElement>[] => [
  {
    content: `summary`,
    property: 'twitter:card' // summary | summary_large_image
  },
  {
    content: `@visormatt`,
    property: 'twitter:creator'
  },
  {
    content: data.description,
    property: 'twitter:description'
  },
  {
    content: data.image,
    property: 'twitter:image'
  },
  // {
  //   content: `@visormatt`,
  //   property: 'twitter:site'
  // },
  {
    content: data.title,
    property: 'twitter:title'
  }
];

export { getTwitterMeta };
