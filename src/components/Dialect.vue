<template>
  <div class="dialect">
    <h1 @click="debug">{{msg}}</h1>
  </div>
</template>

<script lang="coffee" type="text/coffeescript">
  module.exports =
    data: ->
      msg: 'This template supports Coffeescript and SCSS!'
    methods:
      debug: ->
        console.log 'coffeescript'
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped rel="stylesheet/scss">
  $color: green;
  .dialect {
    color: $color;
  }
</style>
