import { color } from '@barguide/style-guide';

const getBrowserMeta = (): React.MetaHTMLAttributes<HTMLMetaElement>[] => [
  {
    charSet: 'utf-8'
  },
  {
    content: color.primary,
    name: 'theme-color'
  },
  {
    content: `initial-scale=1, minimum-scale=1, shrink-to-fit=no, user-scalable=no, viewport-fit=cover, width=device-width`,
    name: 'viewport'
  }
];

export { getBrowserMeta };
