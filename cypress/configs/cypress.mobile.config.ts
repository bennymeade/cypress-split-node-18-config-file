import { defineConfig } from "cypress";
// import cypressSplit from 'cypress-split';
import defu from "defu";

import defaultConfig from "../../cypress.config";

export default {
  ...defineConfig(
    defu(
      {
        viewportWidth: 375,
        viewportHeight: 812,
        userAgent:
          "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) Mobile/15E148",
      },
      defaultConfig
    )
  ),

  // e2e: {
  //   setupNodeEvents(on, config) {
  //     cypressSplit(on, config)
  //     return config
  //   },
  // },
};
