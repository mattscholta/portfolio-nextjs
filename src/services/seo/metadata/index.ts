import { CLIENT_URL } from '@src/config/settings';
import { defaults } from '@src/services/seo/config/defaults';
import { getAppleMeta } from '@src/services/seo/metadata/apple';
import { getBrowserMeta } from '@src/services/seo/metadata/browsers';
import { getFacebookMeta } from '@src/services/seo/metadata/facebook';
import { getGeneralMeta } from '@src/services/seo/metadata/general';
import { getGoogleMeta } from '@src/services/seo/metadata/google';
import { getOpenGraphMeta } from '@src/services/seo/metadata/openGraph';
import { getTwitterMeta } from '@src/services/seo/metadata/twitter';

export interface Metadata {
  description: string;
  title: string;
  path: string;
  image: string;
}

const defaultMetadata: Metadata = {
  description: defaults.description,
  image: defaults.image,
  path: CLIENT_URL,
  title: defaults.title
};

/**
 * @name getMetadata
 * @description This method is used to generate our metadata tags which
 * unlock a variety of SEO and Social "shareability" of our site/content
 */
const getMetadata = (
  data: Metadata
): React.MetaHTMLAttributes<HTMLMetaElement>[] => [
  ...getAppleMeta(),
  ...getBrowserMeta(),
  ...getGeneralMeta(),
  ...getFacebookMeta(data),
  ...getGoogleMeta(data),
  ...getOpenGraphMeta(data),
  ...getTwitterMeta(data)
];

const metadata = getMetadata(defaultMetadata);

export { defaultMetadata, getMetadata, metadata };
