import {
  SITE_AUTHOR,
  SITE_DESCRIPTION,
  SITE_TITLE
} from '@src/config/constants';
import { CLIENT_URL } from '@src/config/settings';

/**
 * @external https://ahrefs.com/blog/seo-meta-tags/
 * @description This is the base SEO structure
 */
const defaults = {
  author: SITE_AUTHOR,
  description: SITE_DESCRIPTION,
  image: `${CLIENT_URL}/images/share.jpg`,
  robots: 'index, follow',
  title: SITE_TITLE
};

export { defaults };
