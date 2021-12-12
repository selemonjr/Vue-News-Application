<template>
  <div>
    <Navigation/>
      <router-view />
  </div>
</template>
<script>
import Navigation from "./components/Navigation.vue";
export default {
    name: "App",
    components: { Navigation}
}
</script>
<style>
* {
  margin:0;
  padding:0;
  box-sizing: border-box;
}
body {
  height:100vh;
  width:100%;
  position:relative;
  background:#f8f7f7;
  font-family:sans-serif;
}
</style>