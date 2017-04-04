<template>
    <div>
        <img src="../assets/01.jpg" alt="">
        <div class="row">
            <div class="col-xs-12">

                <form>
                    <div class="form-group">
                        <label for="username">用户名</label>
                        <input v-model="account.username" type="text" class="form-control" id="username"
                               placeholder="请输入用户名">
                    </div>
                    <div class="form-group">
                        <label for="password">密码</label>
                        <input v-model="account.password" type="password" class="form-control" id="password"
                               placeholder="请输入密码">
                    </div>
                    <button :disabled="!verify.$valid" @click="login" type="button" class="btn btn-primary btn-block btn-lg">登录</button>
                </form>
                <p style="margin-top: 10px;">当前在线人数 3</p>
            </div>
        </div>
    </div>
</template>

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
                @.$router.push name: 'my.info'
        created: ->
            @.$verify
                'account.username':
                    required: true
                'account.password':
                    required: true
</script>

<style lang="scss" scoped rel="stylesheet/scss">
    .row {
        padding: 5px;
    }

    img {
        width: 100%;
    }
</style>