import { defaults } from '@src/services/seo/config/defaults';

const getAppleMeta = (): React.MetaHTMLAttributes<HTMLMetaElement>[] => [
  {
    content: 'yes',
    name: 'apple-mobile-web-app-capable'
  },
  {
    content: 'black',
    name: 'apple-mobile-web-app-status-bar-style'
  },
  {
    content: defaults.title,
    name: 'apple-mobile-web-app-title'
  }
];

export { getAppleMeta };
