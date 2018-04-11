function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (let i = 0; i < children.length; i++) {
      const c = children[i]
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

export {
  getFirstComponentChild,
  isAsyncPlaceholder,
  getComponentName,
  isDef
}
