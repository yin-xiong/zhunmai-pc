<template>
  <div id="app">
    <transition :name="animate">
      <router-view class="Router"/>
    </transition>

  </div>
</template>
<script>
  export default {
    name:'app',
    data(){
      return {
        animate:''
      }
    },
    updated() {window.scroll(0,0);},
    watch:{
      $route(to, from) {
        if(to.meta.index > from.meta.index){
          //设置动画名称
          this.animate= 'slide-left';
        }else{
          this.animate= 'slide-right';
        }
      }
    }

  }
</script>
<style scoped>
  .Router {
    position: absolute;
    left: 0;
    right: 0;
  }
  .slide-right-enter-active,
  .slide-right-leave-active,
  .slide-left-enter-active,
  .slide-left-leave-active {
    will-change: transform;
    transition: all 500ms;
    position: absolute;
  }

  .slide-right-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  .slide-right-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  .slide-left-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  .slide-left-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
</style>