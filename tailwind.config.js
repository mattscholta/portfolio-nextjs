/* eslint-disable @typescript-eslint/no-var-requires */

const config = require('@barguide/style-guide/dist/tailwind.config.js');

module.exports = {
  ...config,
  mode: 'jit',
  purge: ['./src/**/*.{ts,tsx}'],
  theme: {
    ...config.theme,
    extend: {
      screens: {
        xs: '320px'
      }
    }
  },
  variants: {
    animation: ['responsive', 'motion-safe', 'motion-reduce']
  }
};
