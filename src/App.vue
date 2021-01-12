<template>
  <div id="app">
    <button @click="toA">跳转到A页面</button>
    <button @click="toB">跳转到B页面</button>
    <router-view></router-view>


  </div>
</template>

<script>

import router from "@/router";
import store from "@/store";

export default {
  name: 'App',
  store: store,
  data() {
    return {
      isAuthenticated: true,
      count: 0
    }
  },
  created() {
    this.count = this.$store.state.count
    console.log(this.count)
  },
  methods: {
    // toHome() {
    //   this.$router.push('/home')
    // },
    // toList() {
    //   router.beforeEach((to, from, next) => {
    //     if (to.meta.requireAuth) {
    //       if (!this.isAuthenticated) {
    //         next('/login')
    //       } else {
    //         next()
    //       }
    //     } else {
    //       next()
    //     }
    //   })
    //
    //   this.$router.push('/list')
    // },
    toA() {
      router.push('/a')
    },
    toB() {
      router.push('/b')
    },

  }
}
</script>

<style>

</style>