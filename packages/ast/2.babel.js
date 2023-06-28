const babel = require('@babel/core')

const types = require('@babel/types')

// const transformPlugin = require('babel-plugin-transform-es2015-arrow-functions')

const transformPlugin = {
  visitor: {
    ArrowFunctionEpression(path){
      let {node} = path
      node.type = 'FunctionExpression'
      let body = node.body

      hoistFunctionEvn(path)
      if(!types.isBlockStatement(body)) {
        node.body = types.blockStatement([types.returnStatement(body)])
      }
    }
  }
}
function getThisPath(path) {
  let arr = []
  path.traverse({
    ThisExpression(path) {
      arr.push(path)
    } 
  })
}
function hoistFunctionEvn(path) {
  // 查找父作用域
  const thisEnv = path.findParent((parent) => (parent.isFunction() && parent.isArrowFunctionExpress() || parent.isProgram() ))
  const biningThis = '_this'
  // 得到this
  const thisPaths = getThisPath(path)

  // 修改当前路径中的this -> _this
  thisPaths.forEach(path => {
    path.replaceWith(types.identifier(biningThis))
  })
  thisEnv.scope.push({
    id: types.identifier(biningThis),
    init: types.thisExpression()
  })
}

const code = `const sum = () => a + b`

const res = babel.transform(code, {
  plugins: [transformPlugin]
})

console.log(res.code, 'res');