<template>
    <div class='one'>
      <div class="menuWrapper" ref="menuWrapper">
        <ul>
            <li v-for="(item,index) in dataList" :key="index" class="food-list-hook" @click="selectMenu(index)">
              <div class="conTop">
                  <div class="title">
                      {{item.title}} {{item.des}}
                      <span v-if="item.good.length" v-for="(x,index) in item.good" :key="index" :class="itemGoods(index)">{{x}}</span>
                  </div>
                  <div>
                    <span class="fontshi fblchild"></span>
                    <div class="cart-warpper">
                      <CART></CART>
                    </div>
                  </div>
              </div>
            </li>
        </ul>
      </div>
    </div>
</template>

<script>
import dataList from './data'
import CART from './cart'
import BScroll from 'better-scroll'
import './style.css'
export default {
  data () {
    return {
      dataList: [],
      scroll: 0
    }
  },
  created () {
    this.dataList = dataList
  },
  mounted () {
    this.$nextTick(function () {
      for (var i = 0; i < this.dataList.length; i++) {
        this.setTime(i, this.dataList[i].tnum)
      }
      this._initScroll()
    })
  },
  methods: {
    selectMenu (index) {
      let foodList = this.$refs.menuWrapper.getElementsByClassName('food-list-hook')
      let el = foodList[index]
      this.meunScroll.scrollToElement(el, 300)
    },
    itemGoods (key) {
      if (key === 0) {
        return 's1'
      } else if (key === 1) {
        return 's2'
      } else if (key === 2) {
        return 's3'
      } else if (key === 3) {
        return 's4'
      }
    },
    setTime (key, num) {
      var timer = document.getElementsByClassName('fblchild')[key]
      if (num > 0) {
        var miaoCount = Math.floor(num / 1000)
        var tian = Math.floor(miaoCount / 3600 / 24)
        var shi = Math.floor(Math.floor(miaoCount / 3600) - tian * 24)
        var fen = Math.floor(miaoCount / 60) - (tian * 24 * 60 + shi * 60)
        var miao = miaoCount - (tian * 24 * 3600 + shi * 3600 + fen * 60)
        timer.innerHTML = tian + '天' + shi + '时' + fen + '分' + miao + '秒'
        num -= 1000
        setTimeout(() => {
          this.setTime(key, num)
        }, 1000)
      } else {
        timer.innerHTML = '时间结束'
      }
    },
    _initScroll () {
      this.meunScroll = new BScroll(this.$refs.menuWrapper, {
        click: true,
        probeType: 3
      })
      this.meunScroll.on('scroll', (pos) => {
        this.scroll = Math.abs(Math.round(pos.y))
      })
    }
  },
  components: {
    CART
  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.one {
  width: 100%;
  position:absolute;
  top: 0vw;
  bottom: 0;
  overflow: hidden;
}

.menuWrapper {
  width: 100%;
  height: 100%;
}
.one li {
  width: 100%;
  background: #ffffff;
  margin-bottom:5vw
}

.one li .conTop {
  width: 100%;
  margin: 0 auto;
  border-bottom:1px solid #eeeeee;
  font-size: 0;
  padding-left: 3vw;
  box-sizing: border-box;
  position: relative;
}

.one li .conTop .title {
  display: inline-block;
  height: 100%;
  line-height: 10vw;
  font-size: 3.2vw;
  color: #323232;
}

.one li .conTop span {
  font-size: 3.2vw;
  vertical-align: top;
  line-height:10vw;
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

.one li .conTop .fontshi{
  font-size: 4.2vw;
  line-height: 10vw;
  color: #cdad00;
  display: inline-block
}

.one li .conTop .cart-warpper {
  display: inline-block;
  position:absolute;
  right: 0;
}

</style>
