import { defaults } from '@src/services/seo/config/defaults';

const getGeneralMeta = (): React.MetaHTMLAttributes<HTMLMetaElement>[] => [
  {
    content: defaults.author,
    name: 'author'
  },
  {
    content: defaults.description,
    name: 'description'
  },
  {
    content: defaults.image,
    name: 'image'
  },
  {
    content: defaults.title,
    name: 'name'
  }
];

export { getGeneralMeta };
