<template>
  <div>
    <p>
      Foo Component Instance {{ id }}
    </p>

    <p>
      Native Input: <input type="text" placeholder="Type something here.">
    </p>
    <p>
      Custom State: 
      <button @click="count++">
        count {{ count }}
      </button>
    </p>
    <p>
      Random: {{ random }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'foo',

  props: {
    id: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      count: 0,
      random: Math.random()
    }
  },

  created () {
    const log = `Foo Component Instance \`${this.id}\` Created !`
    this.$parent.$parent.logs.push(log)
  }
}
</script>
