import { getFirstComponentChild, getComponentName } from './utils'

export default {
  name: 'v-cache',
  abstract: true,

  props: {
    cacheKey: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      cache: Object.create(null)
    }
  },

  render () {
    const slot = this.$slots.default
    const vnode = getFirstComponentChild(slot)
    const componentOptions = vnode && vnode.componentOptions

    if (componentOptions) {
      const name = getComponentName(componentOptions)
      const { cache, cacheKey } = this
      const key = name + cacheKey

      vnode.key = key

      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance
      } else {
        cache[key] = vnode
      }

      vnode.data.keepAlive = true
    }
    return vnode || (slot && slot[0])
  },

  destroyed () {
    Object.values(this.cache).forEach(vnode => {
      vnode.componentInstance.$destroy()
    })
  }
}
