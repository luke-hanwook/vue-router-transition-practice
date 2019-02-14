<template>
  <div class="circle"></div>
</template>

<script>
export default {
  created() {
    console.log("circle");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.circle {
  width: 100px;
  height: 100px;
  background: blue;
  border-radius: 50%;
  float: left;
  position: relative;
}
</style>
