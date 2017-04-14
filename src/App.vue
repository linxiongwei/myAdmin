<style lang="scss">
@import './static/style/comm.scss';
</style>

<template>
  <div>
    <header-navigation></header-navigation>
    <div class="wrap">
      <left-sidebar></left-sidebar>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderNavigation from './component/layout/header.vue'
import LeftSidebar from './component/layout/menu.vue'

export default {
  name: 'app',
  data () {
    return {
      author: 'lin xiong wei'
    }
  },
  components:{ HeaderNavigation , LeftSidebar }
}
</script>