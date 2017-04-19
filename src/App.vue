<style lang="scss">
@import './static/style/comm.scss';
</style>

<template>
  <div>
    <header-navigation @changeNav="recieveData"></header-navigation>
    <div class="wrap">
      <left-sidebar :headerRoute="headerRoute"></left-sidebar>
      <div class="content">
        <router-view></router-view>
        <button @click="show = true">弹框</button>
        <dialog-wrap :show="show" @changeShow="changeShow2">
          <p>这是一个对话框点击遮盖层或者按 ESC 键可以关闭</p>
          <input type="text" v-model="author"/>
        </dialog-wrap>
        <p>{{author}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderNavigation from './component/layout/header.vue'
import LeftSidebar from './component/layout/menu.vue'
import DialogWrap from './component/common/dialog/dialog.vue'

export default {
  name: 'app',
  data () {
    return {
      author: 'lin xiong wei',
      headerRoute:this.$route.name,
      show: false
    }
  },
  components:{ HeaderNavigation , LeftSidebar ,DialogWrap },
  methods:{
    recieveData:function(name){
      this.headerRoute = name
    },
    changeShow2:function(val){
      this.show = val
    }
  }
}
</script>