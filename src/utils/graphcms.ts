import { GraphQLClient } from 'graphql-request';

import { GRAPHCMS_TOKEN, GRAPHCMS_URL } from '@src/config/settings';

/**
 * @name graphcms
 * @description GraphCMS client
 */
export const graphcms = new GraphQLClient(GRAPHCMS_URL, {
  headers: {
    Authorization: `Bearer ${GRAPHCMS_TOKEN}`
  }
});
