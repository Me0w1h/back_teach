<template>
  <div id="app">
    <router-view v-wechat-title="$route.meta.title "/>
  </div>
</template>

<script>

export default {
  name: 'App',

}
</script>

<style>
html,body{
  margin: 0;
  padding: 0;
}
#app {
  height: 100vh;
}
#building{
  background:url("../src/assets/images/home-bg.png");
  width:100%;
  height:100%;
  position:fixed;
  margin-left: 0px;
  background-size:100% 100%;
}
</style>
