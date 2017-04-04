<template>
    <div id="info">
        <div id="student-img">
            <img src="../assets/100x100.png" alt="">
        </div>
        <table class="table">
            <tbody>
            <tr>
                <th scope="row">学号</th>
                <td>{{ map.xh }}</td>
            </tr>
            <tr>
                <th scope="row">姓名</th>
                <td>{{ map.xm }}</td>
            </tr>
            <tr>
                <th scope="row">性别</th>
                <td>{{ map.xbmc }}</td>
            </tr>
            <tr>
                <th scope="row">身份证号</th>
                <td>{{ map.sfzh }}</td>
            </tr>
            <tr>
                <th scope="row">入学年份</th>
                <td>{{ map.rxnf }}</td>
            </tr>
            <tr>
                <th scope="row">所在院系</th>
                <td>{{ map.dwmc }}</td>
            </tr>
            <tr>
                <th scope="row">年级</th>
                <td>{{ map.nj }}</td>
            </tr>
            <tr>
                <th scope="row">专业</th>
                <td>{{ map.dwmc }}</td>
            </tr>
            <tr>
                <th scope="row">民族</th>
                <td>{{ map.mzmc }}</td>
            </tr>
            <tr>
                <th scope="row">政治面貌</th>
                <td>{{ map.zzmmmc }}</td>
            </tr>
            </tbody>
        </table>
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