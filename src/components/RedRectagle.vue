<template>
  <div class="rect"></div>
</template>

<script>
export default {
  created() {
    console.log("rect");
  }
};
</script>

<style>
.rect {
  width: 150px;
  height: 150px;
  background: red;
  float: right;
  position: relative;
}
</style>
