<template>
  <mt-button @click.native="handleClick">按钮</mt-button>
</template>

<script lang="coffee" type="text/coffeescript">
  module.exports =
    methods:
      handleClick: ->
        this.$toast('Hello world!')
</script>
