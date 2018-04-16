<template>
    <div class='one'>
        <ul>
            <li v-for="(item,index) in dataList" :key="index">
              <div class="conTop">
                  <div class="title">
                      {{item.title}} {{item.des}}
                      <span v-if="item.good.length" v-for="(x,index) in item.good" :key="index" :class="itemGoods(x)">{{x}}</span>
                      <div>{{tian}}天{{shi}}时{{fen}}分{{miao}}秒</div>
                  </div>
              </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data () {
    return {
      dataList: [],
      tian: '00',
      shi: '00',
      fen: '00',
      miao: '00'
    }
  },
  created () {
    this.dataList = [
      {
        title: '新手体验',
        des: 'yx2012',
        good: [],
        qianl: '11.00',
        houl: '3.00',
        time: '12',
        money: '12345.25',
        status: 0,
        tnum: 45454545
      },
      {
        title: '余宝宝',
        des: 'yx2013',
        good: ['新春红包', '红包返现', '加息券', '抽奖'],
        qianl: '12.00',
        houl: '2.00',
        time: '18',
        money: '22345.25',
        status: 1,
        tnum: 323232323
      },
      {
        title: '余流宝',
        des: 'yx2014',
        good: ['新春红包', '红包返现', '抽奖'],
        qianl: '15.00',
        houl: '6.00',
        time: '16',
        money: '32345.25',
        status: 2,
        tnum: 6666666
      },
      {
        title: '余宝宝',
        des: 'yx2015',
        good: [],
        qianl: '21.00',
        houl: '13.00',
        time: '10',
        money: '412345.25',
        status: 3,
        tnum: 11111111
      },
      {
        title: '余流宝',
        des: 'yx2016',
        good: [],
        qianl: '31.00',
        houl: '31.00',
        time: '21',
        money: '92345.25',
        status: 4,
        tnum: 888888888
      }
    ]
  },
  methods: {
    itemGoods (item) {
      if (item === '新春红包') {
        return 's1'
      } else if (item === '红包返现') {
        return 's2'
      } else if (item === '加息券') {
        return 's3'
      } else if (item === '抽奖') {
        return 's4'
      }
    }
  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.one li {
  width: 1170px;
  height: 214px;
  background: #ffffff;
  margin: 35px auto;
}

.one li .conTop {
  width: 1102px;
  height: 74px;
  margin: 0 auto;
  border-bottom:1px solid #eeeeee;
  font-size: 0;
}

.one li .conTop .title {
  display: inline-block;
  height: 100%;
  line-height: 74px;
  font-size: 20px;
  color: #323232;
}

.one li .conTop span {
  font-size: 12px;
  vertical-align: top;
  line-height:75px;
  margin-right:10px;
}

.one li .conTop span:first-child {
  margin-left:5px;
}

.one li .conTop span.s1 {
  background: #fff2da;
  color: #ffad00;
  border-radius: 4px;
  border:1px solid #ffad00;
  padding: 2px 5px;
}

.one li .conTop span.s2 {
  background: #ffe3da;
  color: #ff693e;
  border-radius: 4px;
  border:1px solid #ff693e;
  padding: 2px 5px;
}

.one li .conTop span.s3 {
  background: #daeeff;
  color: #2380e8;
  border-radius: 4px;
  border:1px solid #2380e8;
  padding: 2px 8px;
}

.one li .conTop span.s4 {
  background: #f7daff;
  color: #b650c0;
  border-radius: 4px;
  border:1px solid #b650c0;
  padding: 2px 10px;
}
</style>
