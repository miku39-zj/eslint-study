/**
 * @fileoverview no var
 * @author miku
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: null, // `problem`, `suggestion`, or `layout`
    docs: {
      description: "no var",
    },
    fixable: "code", // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
    message: {
      unexpected: "no {{type}}",
    },
  },

  create(context) {
    const sourceCode = context.getSourceCode();
    return {
      // visitor functions for different types of nodes
      VariableDeclaration(node) {
        console.log(node);
        if (node.kind === "var") {
          context.report({
            node,
            data: { type: "var" },
            message: "unexpected",
            fix(fixer) {
              const varToken = sourceCode.getFirstToken(node, {
                filter: (t) => t.value === "var",
              });
              return fixer.replaceText(varToken, "let");
            },
          });
        }
      },
    };
  },
};
