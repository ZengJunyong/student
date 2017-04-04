<template>
    <div>
        <img src="../assets/01.jpg" alt="">
        <div class="row">
            <div class="col-xs-4 text-center">
                <router-link to="notification">
                    <span class="glyphicon glyphicon-bell"></span>
                    <br>
                    通知公告





                </router-link>
            </div>
            <div class="col-xs-4 text-center">
                <span class="glyphicon glyphicon-search"></span>
                <br>
                <a href="javascript:void(0)">成绩查询</a>
            </div>
            <div class="col-xs-4 text-center">
                <span class="glyphicon glyphicon-list-alt"></span>
                <br>
                <a href="javascript:void(0)">考试安排</a>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-4 text-center">
                <router-link to="my.time.table">
                    <span class="glyphicon glyphicon-road"></span>
                    <br>
                    课表查询
                </router-link>
            </div>
            <div class="col-xs-4 text-center">
                <span class="glyphicon glyphicon-book"></span>
                <br>
                <a href="javascript:void(0)">培养计划</a>
            </div>
            <div class="col-xs-4 text-center">
                <router-link to="my.info">
                    <span class="glyphicon glyphicon-user"></span>
                    <br>
                    学生信息
                </router-link>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-4 text-center">
                <span class="glyphicon glyphicon-share"></span>
                <br>
                <a href="javascript:void(0)">空闲教室</a>
            </div>
        </div>
        <nav class="navbar navbar-default navbar-fixed-bottom">
            上午好，尹致远
            <span class="pull-right">
            <router-link to="my.app">
                <span class="glyphicon glyphicon-cog"></span>
                设置
            </router-link>
        </span>
        </nav>
    </div>
</template>

<script lang="coffee" type="text/coffeescript">

</script>

<style lang="scss" scoped rel="stylesheet/scss">
    img {
        width: 100%;
    }

    .col-xs-4 .glyphicon {
        padding-top: 40px;
    }

    a {
        color: black;
    }

    .navbar {
        min-height: 20px;
        padding: 10px;
    }
</style>