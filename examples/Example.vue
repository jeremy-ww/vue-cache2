<template>
  <section id="app">
    <aside class="nav">
      <div>
        <h2>Foo Component</h2>
        <p v-for="path in urls" :key="path">
          <router-link :to="`/cache/foo/${path}/`">
            Foo {{ path }}
          </router-link>
        </p>
      </div>
      <div>
        <h2>Bar Component</h2>
        <p>
          <router-link to="/cache/bar/">
            Bar {{ path }}
          </router-link>
        </p>
      </div>
      <div class="logs">
        <h2>Component Created Log</h2>
        <p v-for="(log, key) in logs" :key="key">
          {{ log }}
        </p>
      </div>
    </aside>

    <router-view></router-view>
  </section>
</template>

<script>
export default {
  name: 'app',
  
  data () {
    return {
      urls: ['5847857556760887', '3003116906988217', '466208369981173', '6252791263487563', '008058658041662392'],
      logs: []
    }
  }
}
</script>

<style>
* {
  font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.nav {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

a.router-link-exact-active {
  color: #42b983;
}

input {
  padding: 2px 8px;
}

legend {
  font-weight: bold;
}

fieldset {
  height: 200px;
}

.logs {
  overflow-x: hidden;
  overflow-y: auto;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.container {
  position: absolute;
}
</style>
