<template>
  <div id="a1">
    <div style="margin-top: 50px">
      {{count}}
      <button @click="increment">+</button>
    </div>
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "A1",
  methods: {
    increment() {
      store.commit('increment')
      this.count = store.state.count
      // console.log(store.state.count)
    }
  }
}
</script>

<style scoped>

</style>