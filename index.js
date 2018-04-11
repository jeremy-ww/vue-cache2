import Cache from './cache'

function VueCache (Vue) {
  Vue.component(Cache.name, Cache)
}

export default VueCache

if (typeof window !== 'undefined' && window.Vue) {
  VueCache(window.Vue)
}
