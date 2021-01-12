<template>
  <div id="a2">
    <div style="margin-top: 50px">
      {{ count }}
      <button @click="decrement">-</button>
    </div>
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "A2",
  data() {
    return {
      count: store.state.count
    }
  },
  methods: {
    decrement() {
      store.commit('decrement')
      this.count = store.state.count
      // console.log(store.state.count)
    }
  }
}
</script>

<style scoped>

</style>