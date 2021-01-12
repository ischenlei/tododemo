<template>
  <div id="a">
    <h1>页面A</h1>
    <router-link style="margin-right: 20px" to="/a/a1">增加</router-link>
    <router-link to="/a/a2">减少</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "A"
}
</script>

<style scoped>

</style>