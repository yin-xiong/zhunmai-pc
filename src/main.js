import Vue from "vue";
import App from "./App.vue";
  import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios,axios);
Vue.use(router);

import apis from './api/api'
Vue.prototype.$api = apis

import animate from 'animate.css';
Vue.use(animate)
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/reset.css'

Vue.config.productionTip = false;
Vue.use(ElementUI);

axios.defaults.timeout = 5000
// axios.defaults.baseURL='http://zhunmaics.yujinhudong.cn'

Vue.prototype.domain = 'http://zhunmaics.yujinhudong.cn'

Vue.prototype.showMsg = function (str,type) {
  // 打开提示框前先清除所有提示，不然会一直出现提示框
  this.$message.closeAll();
  this.$message({
    showClose: true,
    message: str,
    type
  });
}

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) { // 判断该路由是否需要登录权限
    if (localStorage.username != undefined && localStorage.token !=undefined) { // 判断缓存里面是否有 userName  //在登录的时候设置它的值
      next();
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next();
  }
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
