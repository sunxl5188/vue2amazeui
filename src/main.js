// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "animate.css/animate.min.css"
import "amazeui/dist/css/amazeui.min.css"
import amaze from 'amazeui'

Vue.use(amaze)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  next()
})

router.afterEach((to, from) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
