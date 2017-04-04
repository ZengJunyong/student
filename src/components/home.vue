<template>
    <div id="home">
        <router-view></router-view>
        <mt-tabbar fixed v-model="view">
            <mt-tab-item id="my.info">
                <img slot="icon" src="../assets/100x100.png">
                我的信息
            </mt-tab-item>
            <mt-tab-item id="my.time.table">
                <img slot="icon" src="../assets/100x100.png">
                我的课表
            </mt-tab-item>
            <mt-tab-item id="notification">
                <img slot="icon" src="../assets/100x100.png">
                消息通知
            </mt-tab-item>
            <mt-tab-item id="my.app">
                <img slot="icon" src="../assets/100x100.png">
                设置
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script lang="coffee" type="text/coffeescript">
    module.exports =
        name: 'Home'
        data: ->
            view: 'my.info'
        watch:
            view: (v)->
                @.$router.push name: v
</script>