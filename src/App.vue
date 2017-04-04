<template>
    <div class="container-fluid" id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
    .container-fluid {
        padding-left: 0;
        padding-right: 0;
    }
</style>
