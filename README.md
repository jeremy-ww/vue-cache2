# vue-cache2 [![Build Status](https://flat.badgen.net/circleci/github/Army-U/vue-cache2/master)](https://circleci.com/gh/Army-U/vue-cache2) [![npm package](https://flat.badgen.net/npm/v/vue-cache2)](https://www.npmjs.com/package/vue-cache2)

Caching multiple component instances for components in Vue, the official component `Keep-Alive` can only cache an instance of different components. Common usage scenario: the different routing parameters of the same route can cause the component to use the same instance, and can not implement the caching of the data that has been requested. [（中文文档）](README.zh-CN.md)

## Features

* Equivalent official `keep-alive` component effect
* `cache-key` is used to distinguish different instances of components. There is `cache-key` corresponding cache directly calling caching instances, otherwise executing new life cycle

## Install

```bash
$ npm i vue-cache2 -S
```

## Usage

```js
import VueCache from 'vue-cache2'
import Vue from 'vue'

Vue.use(VueCache)
```

## Options

### cache-key

Type: `String`
Required: `true`

The only way to distinguish the different instances of the same component.

## Example

```vue
<transition name="fade">
  <v-cache :cache-key="$route.path">
    <router-view></router-view>
  </v-cache>
</transition>
```

```js
new Router({
  routes: [
    {
      path: '/user/:userId',
      name: 'user-component',
      component: UserComponent
    }
  ]
})
```

When the route enters `/user/1` `/user/2` `/user/3` respectively, the `UserComponent` component triggers the normal lifecycle hook (and the `keep-alive` component is triggered only once when it enters `/user/1`). The hook function will not be triggered when the `/user/1` `/user/2` `/user/3` is re entered, but the instance that has been generated before will be obtained. To render, avoid frequent requests, and retain the original page status.

## License

Copyright (c) 2017-present, Army-U. Released under the [MIT](https://opensource.org/licenses/MIT) License.
