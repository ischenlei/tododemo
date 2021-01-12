<template>
  <div id="b">
    <h1>页面B</h1>
    <div style="margin-top: 50px">
      当前数字：{{ count }}
    </div>
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "B",
  data() {
    return {
      count: store.state.count
    }
  }
}
</script>

<style scoped>

</style>