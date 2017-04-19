<template>
  <div class="dialog"
    v-show="show"
    transition="dialog-fade">
    <div class="dialog-content">
      <slot></slot>
    </div>
  </div>
</template>

<style>
  .dialog {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: fixed;
    width: 90%;
  }

  .dialog-content {
    background: #fff;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
  }

  .dialog-fade-transition {
    transition: opacity .3s linear;
  }

  .dialog-fade-enter,
  .dialog-fade-leave {
    opacity: 0;
  }
</style>

<script>
import Popup from './'

export default {
  mixins: [Popup],
  methods: {
    // 响应 overlay事件
    overlayClick () {
      //this.show = false //vue2.0后，子组件改变父组件数据不能通过props的.sync来双向绑定数据，是通过$emit绑定方法
      this.$emit('changeShow',false)
    },
    // 响应 esc 按键事件
    escPress () {
      //this.show = false
      this.$emit('changeShow',false)
    }
  }
}
</script>
