<template>
    <div id="login">
        <mt-header title="登录"></mt-header>
        <mt-field label="用户名" placeholder="请输入用户名" v-model="account.username"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="account.password"></mt-field>
        <div class="btn">
            <mt-button type="primary" @click.native="login">登录</mt-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Login'
    };
</script>

<script lang="coffee" type="text/coffeescript">
    module.exports =
        name: 'Login'
        data: ->
            account:
                username: 'yong', password: '1'
        methods:
            login: ->
                {username, password} = this.account
                console.log {username, password}
</script>

<style lang="scss" scoped rel="stylesheet/scss">
    .btn {
        text-align: center;
        margin-top: 15px;
        button {
            padding: 5px 50px;
        }
    }
</style>