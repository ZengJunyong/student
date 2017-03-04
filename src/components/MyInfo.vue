<template>
    <div id="info">
        <mt-header title="我的信息"></mt-header>
        <div id="student-img">
            <img src="../assets/100x100.png" alt="">
        </div>
        <mt-field label="学号" v-model="map.xh"></mt-field>
        <mt-field label="姓名" v-model="map.xm"></mt-field>
        <mt-field label="性别" v-model="map.xbmc"></mt-field>
        <mt-field label="身份证号" v-model="map.sfzh"></mt-field>
        <mt-field label="入学年份" v-model="map.rxnf"></mt-field>
        <mt-field label="所在院系" v-model="map.dwmc"></mt-field>
        <mt-field label="年级" v-model="map.nj"></mt-field>
        <mt-field label="专业" v-model="map.dwmc"></mt-field>
        <mt-field label="民族" v-model="map.mzmc"></mt-field>
        <mt-field label="政治面貌" v-model="map.zzmmmc"></mt-field>
    </div>
</template>

<script lang="coffee" type="text/coffeescript">
    module.exports =
        name: 'MyInfo'
        data: ->
            map: {
                xh: '2015032022001'
                xm: '陈刚'
                xbmc: '男'
                sfzh: '43061119970624553X'
                rxnf: '2015'
                dwmc: '运动系'
                nj: '2015'
                zymc: '2015运动训练'
                bjmc: '15运训2班'
                mzmc: '汉族'
                zzmmmc: '共青团员'
                zp: '照片路径'
            }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
    #student-img {
        text-align: center;
        img {
            width: 50%;
        }
    }
</style>