import { Metadata } from './index';

const getOpenGraphMeta = (
  data: Metadata
): React.MetaHTMLAttributes<HTMLMetaElement>[] => [
  {
    content: data.description,
    property: 'og:description'
  },
  {
    content: data.image,
    property: 'og:image'
  },
  {
    content: data.title,
    property: 'og:title'
  },
  {
    content: 'website',
    property: 'og:type'
  },
  {
    content: data.path,
    property: 'og:url'
  }
];

export { getOpenGraphMeta };
