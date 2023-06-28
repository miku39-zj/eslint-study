/**
 * @fileoverview custom plugin
 * @author miku
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
// module.exports.rules = requireIndex(__dirname + "/rules");

module.exports = {
  rules: requireIndex(__dirname + "/rules"),
  configs: {
    recommended: {
      plugins: ["miku"],
      rules: {
        "miku/no-var": "error",
      },
    },
  },

  processors: {
    ".vue": {
      preprocess(code) {
        console.log(code); // 将 .vue 文件中的js提取后返回
        return [code]; // 校验提取后的js
      },
      postprocess(message) {
        return [];
      },
    },
  },
};
