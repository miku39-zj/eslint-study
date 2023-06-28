const esprima = require('esprima')
const estraverse = require('estraverse')
const escodegen = require('escodegen')

let code = `function a() {}`

// 1 代码转换成ast
const ast = esprima.parseScript(code)

estraverse.traverse(ast, {
  enter(node) {
    if(node.type == 'FunctionDeclaration') {
      node.id.name = 'ast'
    }
  },
  leave(node) {

  }
})

const newCode = escodegen.generate(ast)

console.log(newCode, 'newCode');