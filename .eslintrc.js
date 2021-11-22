/* eslint-disable @typescript-eslint/no-var-requires */

const eslint = require('@barguide/dotfiles/dist/.eslintrc');

module.exports = {
  ...eslint,

  /**
   * Since the config is an object, we can easily override things to
   * help during migrations, or to tweak it for a particular app.
   */
  rules: {
    ...eslint.rules,

    // These interfaces improve overall integration even when empty
    '@typescript-eslint/no-empty-interface': 'off',

    'react/no-unescaped-entities': 'off'
  }
};
