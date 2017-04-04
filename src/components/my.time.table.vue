<template>
    <div id="time-table">
        <div class="content">
            <table class="table filter">
                <tbody>
                <tr>
                    <td>学年学期：</td>
                    <td>周次：</td>
                    <td>星期：</td>
                </tr>
                <tr>
                    <td>
                        <select v-model="map.xnxq">
                            <option value="2015-2016-1">2015-2016-1</option>
                            <option value="2015-2016-2">2015-2016-2</option>
                            <option value="2016-2017-1">2016-2017-1</option>
                        </select>
                    </td>
                    <td>
                        <select v-model="map.kkzc">
                            <option value="全部">全部</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                    </td>
                    <td>
                        <select v-model="map.xq">
                            <option value="1">一</option>
                            <option value="2">二</option>
                            <option value="3">三</option>
                            <option value="4">四</option>
                            <option value="5">五</option>
                            <option value="6">六</option>
                            <option value="7">日</option>
                        </select>
                    </td>
                </tr>
                </tbody>
            </table>
            <table class="table">
                <tbody>
                <tr>
                    <td>第一大节 <br> 0102 <br> 上午</td>
                    <td>运动解剖生理学 <br> 刘飞(0102) <br> 102 <br> 15运训2班 <br> 3-11 周</td>
                </tr>
                <tr>
                    <td>第二大节 <br> 0304 <br> 上午</td>
                    <td>运动生理学 <br> 彭玮(0506) <br> 102 <br> 15运训2班 <br> 1-18 周</td>
                </tr>
                <tr>
                    <td>第三大节 <br> 0506 <br> 中午</td>
                    <td></td>
                </tr>
                <tr>
                    <td>第四大节 <br> 0708 <br> 下午</td>
                    <td>运动生理学 <br> 彭玮(0506) <br> 102 <br> 15运训2班 <br> 1-18 周</td>
                </tr>
                <tr>
                    <td>第五大节 <br> 0910 <br> 晚上</td>
                    <td>运动生理学 <br> 彭玮(0506) <br> 102 <br> 15运训2班 <br> 1-18 周</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script lang="coffee" type="text/coffeescript">
    module.exports =
        name: 'MyTimeTable'
        data: ->
            map: {
                xnxq: '2016-2017-1'
                kkzc: '1'
                xq: 1
            }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  .filter td{
      border: none;
  }
</style>