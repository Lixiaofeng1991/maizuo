import Vue from 'vue'
import App from './App'
import router from './router'

//引入过滤器插件
import filter from "./filter"
Vue.use(filter)


Vue.prototype.$center = new Vue();

//注册全局组件
import Page from './components/common/Page'
Vue.component("page",Page);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
