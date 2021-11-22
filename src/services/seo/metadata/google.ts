import { Metadata } from './index';

const getGoogleMeta = (
  data: Metadata
): React.MetaHTMLAttributes<HTMLMetaElement>[] => [
  {
    content: data.description,
    itemProp: 'description'
  },
  {
    content: data.image,
    itemProp: 'image'
  },
  {
    content: data.title,
    itemProp: 'name'
  }
];

export { getGoogleMeta };
