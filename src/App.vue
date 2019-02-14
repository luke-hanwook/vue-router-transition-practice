<template>
  <div id="app">
    <div class="header"><p>router-transition-practice</p></div>
    <ul>
      <li><router-link to="/circle">CirCle</router-link></li>
      <li><router-link to="/rect">Rectangle</router-link></li>
      <li><router-link to="/triangle">Triangle</router-link></li>
    </ul>
    <div class="wrapper">
      <CustomVueRouterTransition> <router-view /> </CustomVueRouterTransition>
    </div>
  </div>
</template>

<script>
import CustomVueRouterTransition from "./components/CustomVueRouterTransition";
export default {
  name: "App",
  components: { CustomVueRouterTransition }
};
</script>

<style lang="scss" scoped>
html,
body {
  height: 100%;
  overflow: hidden;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.wrapper {
  width: 70%;
  height: 400px;
  position: relative;
  background: rgba(189, 189, 189, 0.5);
}
ul {
  width: 45%;
  display: flex;
  justify-content: space-between;
}
li {
  display: inline;
}
.header {
  width: 100%;
}
</style>
