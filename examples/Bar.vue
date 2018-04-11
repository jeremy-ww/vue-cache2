<template>
  <div>
    <p>
      Bar Component Instance
    </p>
  </div>
</template>

<script>
export default {
  name: 'bar',

  created () {
    const log = `Bar Component Created !`
    this.$parent.$parent.logs.push(log)
  }
}
</script>
