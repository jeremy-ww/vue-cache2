<template>
  <main>
    <fieldset>
      <legend>Main (Router-View)</legend>

      <transition name="fade">
        <vue-cache :cache-key="$route.path">
          <router-view class="container"></router-view>
        </vue-cache>
      </transition>
    </fieldset>
  </main>
</template>

<script>
import VueCache from '../cache'

export default {
  name: 'cache-page',

  components: {
    VueCache
  }
}
</script>
