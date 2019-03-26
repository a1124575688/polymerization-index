<template>
  <div id="app">
    <!--<Index_main/>-->
    <Index_header_pt></Index_header_pt>
    <Index_header_fa></Index_header_fa>
    <div class="head_title" v-show="show">智慧城管综合智慧中心</div>
    <video src="./assets/video/bg_chengdu.mp4" muted autoplay="autoplay" loop="loop" object-fit="fill"></video>
    <View_pager></View_pager>
    <Index_main></Index_main>
    <Index_btn_tab></Index_btn_tab>
  </div>
</template>

<script>
import Index_main from './components/Index_main.vue'
import Index_header_pt from './components/Index_header_pt'
import Index_btn_tab from './components/Index_btn_tab'
import View_pager from './components/View_pager'
import Index_header_fa from './components/Index_header_fa'
export default {
  name: 'app',
  components: {
    Index_main,
    Index_header_pt,
    Index_btn_tab,
    View_pager,
    Index_header_fa
  },
  mounted() {

  },
  computed:{
    show:function () {
      return this.$store.state.label_show;
    },
    show_2:function () {
      return !this.$store.state.label_show;
    }
  }
}
</script>

<style>
  @import "./css/common.scss";
  video{
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }

#app {
  overflow: hidden;
  width: 100vw;
  height: 56.2vw;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  .head_title{
    font-size: 2.9vw;
    position: absolute;
    left: 50%;
    top: 10vw;
    font-weight: bold;
    transform: translateX(-50%);
    color: #d6e9ff;
    text-shadow: 0 0 20px #145f87, 0 0 20px #145f87, 0 0 20px #145f87;
  }
  .el-carousel__button{
    width: 1.04vw !important;
    height: 1.04vw !important;
    border-radius: 0.52vw !important;
    background-color: #38458a !important;
    border: 2px solid #ffffff !important;
  }
</style>
