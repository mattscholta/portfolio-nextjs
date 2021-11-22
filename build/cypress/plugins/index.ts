/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-var-requires */

/**
 * @external https://docs.cypress.io/guides/tooling/plugins-guide
 */
module.exports = (on: any, config: any) => {
  require('@cypress/code-coverage/task')(on, config);

  // add other tasks to be registered here

  // ⚠️ IMPORTANT to return the config object with the any changes
  return config;
};
