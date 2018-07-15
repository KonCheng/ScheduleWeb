import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import VueResource from 'vue-resource'
import 'iview/dist/styles/iview.css';  //引入默认样式文件

Vue.use(iView)
Vue.use(VueResource)

Vue.config.productionTip = false

Vue.http.interceptors.push((request, next) => {
  var authorization = localStorage.getItem("token");
  request.headers.set('Authorization', authorization) // 请求headers携带参数
  next(function (response) {
    return response;
  });
})

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
