<template>
  <div id="app">
      <transition
              enter-active-class="animated fadeIn"
              style="animation-duration:.6s;animation-delay:.6s;animation-iteration-count:1;animation-fill-mode:both;"
      >
            <router-view/>
      </transition>
  </div>
</template>
<script>
  export default {
    updated() {window.scroll(0,0);}
  }
</script>