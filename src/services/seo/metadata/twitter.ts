import { Metadata } from './index';

const getTwitterMeta = (
  data: Metadata
): React.MetaHTMLAttributes<HTMLMetaElement>[] => [
  {
    content: `summary`,
    property: 'twitter:card' // summary | summary_large_image
  },
  {
    content: `@barguideio`,
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
  {
    content: `@barguideio`,
    property: 'twitter:site'
  },
  {
    content: data.title,
    property: 'twitter:title'
  }
];

export { getTwitterMeta };
