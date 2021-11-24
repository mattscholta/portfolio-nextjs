// Configure these for our test env
const ENVIRONMENT = {
  CLIENT_EXTERNAL_URL: 'https://mattscholta.com',
  CLIENT_GOOGLE_ANALYTICS: 'env-google-analytics',
  CLIENT_GOOGLE_TAG_MANAGER: 'env-google-tag-manager',
  CLIENT_INTERNAL_URL: 'https://mattscholta.com',

  GRAPHCMS_TOKEN: 'GRAPHCMS_TOKEN',
  GRAPHCMS_URL: 'GRAPHCMS_URL',

  NODE_ENV: 'test' as NodeJS.Process['env']['NODE_ENV']
};

process.env = { ...process.env, ...ENVIRONMENT };

// https://tinyurl.com/rg3wnh8
process.env.TZ = 'UTC';

// https://goo.gl/aZYQUf ~
// process.setMaxListeners(0);

export { ENVIRONMENT };
