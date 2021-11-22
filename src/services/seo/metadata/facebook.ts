import { Metadata } from './index';

/**
 * @external https://developers.facebook.com/docs/sharing/webmasters
 * @description Tags for sharing on Facebook which uses the Open Graph
 * protocol, so we don't need much more
 */
const getFacebookMeta = (
  _data: Metadata
): React.MetaHTMLAttributes<HTMLMetaElement>[] => [
  // {
  //   content: '##############',
  //   property: 'fb:app_id'
  // }
];

export { getFacebookMeta };
