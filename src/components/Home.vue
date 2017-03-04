<template>
    <div id="home">
        <router-view></router-view>
        <mt-tabbar fixed v-model="view">
            <mt-tab-item id="myInfo">
                <img slot="icon" src="../assets/100x100.png">
                我的信息
            </mt-tab-item>
            <mt-tab-item id="myTimeTable">
                <img slot="icon" src="../assets/100x100.png">
                我的课表
            </mt-tab-item>
            <mt-tab-item id="notification">
                <img slot="icon" src="../assets/100x100.png">
                消息通知
            </mt-tab-item>
            <mt-tab-item id="myApp">
                <img slot="icon" src="../assets/100x100.png">
                应用
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script lang="coffee" type="text/coffeescript">
    module.exports =
        name: 'Home'
        data: ->
            view: 'myInfo'
        watch:
            view: (v)->
                @.$router.push name: v
</script>