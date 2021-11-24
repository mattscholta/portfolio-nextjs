// @ts-check

/* eslint-disable @typescript-eslint/no-var-requires */

const runtimeCaching = require('next-pwa/cache');
const withPWA = require('next-pwa');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.NODE_ENV === 'production'
});

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 * @description Application customizations
 */
module.exports = withBundleAnalyzer(
  withPWA({
    /**
     * @external https://nextjs.org/docs/api-reference/next.config.js/environment-variables
     */
    env: {
      CLIENT_URL: process.env.CLIENT_URL,
      GOOGLE_ANALYTICS: process.env.GOOGLE_ANALYTICS,
      GOOGLE_TAG_MANAGER: process.env.GOOGLE_TAG_MANAGER,
      GRAPHCMS_TOKEN: process.env.GRAPHCMS_TOKEN,
      GRAPHCMS_URL: process.env.GRAPHCMS_URL
    },

    /**
     * @external https://nextjs.org/docs/basic-features/eslint
     * Warning: Dangerously allow production builds to successfully
     * complete even if your project has ESLint errors.
     */
    eslint: {
      ignoreDuringBuilds: true
    },

    /**
     * @external https://www.npmjs.com/package/next-pwa
     * @description Configure our SW (service worker) here making it
     * INCREDIBLY easy to get our PWA/Lighthouse scores up and improve UX
     */
    pwa: {
      buildExcludes: [/middleware-manifest\.json/],
      cacheOnFrontEndNav: true,
      dest: 'public',
      disable: process.env.NODE_ENV !== 'production',
      publicExcludes: [
        '!**/middleware-manifest.json',
        '!fonts/**/*.ttf',
        '!fonts/**/*.woff',
        // '!fonts/**/*.woff2',
        '!images/**/*.jpg',
        '!images/**/*.png',
        '!images/**/*.svg'
        // '!images/**/*.webp',
      ],
      register: true,
      runtimeCaching,
      sw: 'worker.js'
    }
  })
);
