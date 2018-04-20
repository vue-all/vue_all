<template>
  <div>
    <div class="cart">
      <transition name="fade">
        <div v-show="count > 0" @click="jian">
          <span class="jian icon-minus jians"></span>
        </div>
      </transition>
      <div class="con" v-show="count > 0">{{count}}</div>
      <div class="jia icon-plus" @click="add"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 0
    }
  },
  methods: {
    add () {
      this.count++
    },
    jian () {
      this.count--
    }
  }
}
</script>

<style scoped>
  .cart {
    width: 25vw;
    display: inline-block;
    color:red;
    font-size: 0;
    position: relative;
  }
  .cart .fade-enter-active,.cart  .fade-leave-active {
    transition: all .4s linear;
  }
  .cart .fade-enter, .cart .fade-leave-active /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translate3d(12vw, 0, 0);
  }
  .cart .jian,.cart .con,.cart .jia {
    display: inline-block;
    line-height: 10vw;
    font-size: 3.2vw;
    position: absolute;
  }
  .cart .jian,.cart .jia {
    display: inline-block;
    border-radius: 50%;
    background: blue;
    width: 8vw;
    height: 8vw;
    text-align: center;
    line-height: 8vw;
    color:#fff;
  }
  .cart .jian {
    left: 0;
    transition: all .6s;
    /* transform: rotate(45deg); */
  }
  .cart .fade-enter .jians, .cart .fade-leave-active .jians/* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: rotate(180deg);
  }
  /* .cart .jians {
    transform: rotate(180deg);
  } */
  .cart .jia {
    right: 0;
  }
  .cart .con {
    padding: 0 2vw;
    left:9vw
  }
</style>
