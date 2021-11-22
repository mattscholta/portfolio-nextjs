/**
 * @external https://goo.gl/Fn6wVN
 * @description New in Babel 7.x, Babel has as concept of a "root" directory, which
 * defaults to the current working directory. For project-wide configuration, Babel
 * will automatically search for a "babel.config.js" in this root directory.
 */
module.exports = function (api) {
  if (api) api.cache(true);

  return {
    // plugins: ['istanbul'],
    presets: ['next/babel']
  };
};
