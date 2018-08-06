# vue-cache2 [![Build Status](https://flat.badgen.net/circleci/github/Army-U/vue-cache2/master)](https://circleci.com/gh/Army-U/vue-cache2) [![npm package](https://flat.badgen.net/npm/v/vue-cache2)](https://www.npmjs.com/package/vue-cache2)

在 Vue 中为组件缓存多份组件实例, 官方组件 `Keep-Alive` 只能对不同组件的一份实例进行缓存. 常见使用场景: 相同路由的不同路由参数会导致组件使用同一份实例, 无法实现对已经请求过的数据进行缓存. [（English Doc）](README.md)

## Features

* 同等官方 `keep-alive` 组件效果
* 通过 `cache-key` 来对组件的不同实例进行区分, 存在 `cache-key` 对应的缓存直接调用缓存实例, 否则执行新的生命周期

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

同一份组件不同实例的唯一区分方式.

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

当路由分别进入 `/user/1` `/user/2` `/user/3` 时, `UserComponent` 组件会触发正常的生命周期钩子 (而 `keep-alive` 组件仅在进入 `/user/1` 时触发一次). 再次进入 `/user/1` `/user/2` `/user/3` 时不会触发钩子函数, 而是会拿到之前已经生成的实例直接渲染. 避免了多次请求, 也保留了原始的页面状态.

## License

Copyright (c) 2017-present, Army-U. Released under the [MIT](https://opensource.org/licenses/MIT) License.
