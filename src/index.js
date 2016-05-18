import zipObject from 'lodash/zipObject'
import isFunction from 'lodash/isFunction'
import isArray from 'lodash/isArray'
import isString from 'lodash/isString'
import identity from 'lodash/identity'
import get from 'lodash/get'

var baseFn = function baseFn (bindings, bindingNames, handlers) {
  return function () {
    var result
    var bs = Object.assign({}, bindings, zipObject(bindingNames, arguments))

    for (var j = 0; j < handlers.length; j++) {
      result = bindings.resolve(bs, handlers[j].map(identity))
    }

    bs = null
    return result
  }
}

var boomFuncs = {
  call: function (bindings, args) {
    var funcName = args[0]

    var func = bindings.resolve(bindings, funcName)
    if (!isFunction(func)) {
      console.error(
        'function `%s` is not found in current namespace %o\n%s',
        funcName, bindings,
        bindings.node.dataset[bindings.prefix + 'Do'].replace(/^\n|\n\s*$/g, '')
      )

      return null
    }

    return func.apply(
      null,
      func._boomWithBindings
        ? [bindings].concat(args.splice(1))
        : args.splice(1).map(bindings.resolve.bind(null, bindings))
    )
  },
  resolve: function (bindings, expr) {
    if (isArray(expr)) { return bindings.call(bindings, expr) }
    if (isString(expr)) { return get(bindings, expr) }
    if (isObject(expr)) { return expr }
  },
  listen: function (bindings, evSymbol, bindingNames) {
    return bindings.events[evSymbol](
      bindings.node,
      baseFn(bindings, bindingNames, Array.prototype.splice.call(arguments, 3))
    )
  },
  log: console.log.bind(console),
  error: console.error.bind(console),
}

boomFuncs.call._boomWithBindings = true
boomFuncs.resolve._boomWithBindings = true
boomFuncs.listen._boomWithBindings = true

export default function boom (prefix, bindings) {
  return function (node) {
    var extendedBindings = Object.assign(
      {node: node, prefix: prefix},
      boomFuncs,
      bindings
    )

    if (node.dataset[prefix + 'DoParams']) {
      extendedBindings = Object.assign(
        extendedBindings,
        {params: JSON.parse(node.dataset[prefix + 'DoParams'].replace(/^\s*\/\/.*$/gm, ''))}
      )
    }

    JSON
      .parse(node.dataset[prefix + 'Do'].replace(/^\s*\/\/.*$/gm, ''))
      .forEach(boomFuncs.resolve.bind(null, extendedBindings))

    extendedBindings = null
  }
}
