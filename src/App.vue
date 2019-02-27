<template>
  <div id="app">
      <ul class="am-nav am-nav-pills">
          <li class="am-active"><router-link to="/">首页</router-link></li>
          <li><router-link to="/list">列表</router-link></li>
          <li><router-link to="/404">错误页面</router-link></li>
      </ul>
    <transition name="custom-classes-transition" enter-active-class="animated fadeIn" leave-class="animated fadeOut">
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
    </transition>
    <transition name="custom-classes-transition" enter-active-class="animated fadeIn" leave-class="animated fadeOut">
        <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
