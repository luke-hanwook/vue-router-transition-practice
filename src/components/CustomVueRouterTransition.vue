<template>
  <transition
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
  >
    <slot></slot>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      prevHeight: 0,
      prevWidth: 0,
      prevColor: "",
      prevRadius: "",
      prevTop: 0,
      prevLeft: 0,
      prevBottom: 0,
      prevRight: 0,
      computedStyle: {},
      rect: {}
    };
  },
  methods: {
    beforeLeave(el) {
      // console.log("BL");
    },
    leave(el) {
      // console.log("L");
      // el.style.transition = "all 2s";
      const {
        height,
        width,
        backgroundColor,
        borderRadius,
        marginTop,
        marginLeft
      } = getComputedStyle(el);
      // this.prevHeight = height;
      // this.prevWidth = width;
      this.prevColor = backgroundColor;
      this.prevRadius = borderRadius;

      const rect = el.getBoundingClientRect();
      this.prevTop = rect.top;
      this.prevLeft = rect.left;
      this.prevBottom = rect.bottom;
      this.prevRight = rect.right;
      this.prevHeight = rect.height;
      this.prevWidth = rect.width;

      el.style.display = "none";
    },
    afterLeave(el) {
      // console.log("AL");
    },
    beforeEnter(el) {
      // console.log("BE");
    },
    enter(el, done) {
      const { backgroundColor, borderRadius } = getComputedStyle(el);
      const { top, left, height, width } = el.getBoundingClientRect();

      el.style.height = this.prevHeight;
      el.style.width = this.prevWidth;
      el.style.backgroundColor = this.prevColor;
      el.style.borderRadius = this.prevRadius;

      const xPoint = this.prevLeft - left;
      const yPoint = this.prevTop - top;

      console.log(this.prevLeft - left, this.prevTop - top);
      // el.style.transform = `translate(${xPoint}px, ${yPoint}px)`;
      // el.style.transform = `translate(0px, 0px)`;
      el.style.transform = `translate(${xPoint}px, ${yPoint}px)`;
      setTimeout(() => {
        el.style.transition = "all 1s";
        el.style.height = height;
        el.style.width = width;
        el.style.backgroundColor = backgroundColor;
        el.style.borderRadius = borderRadius;
        el.style.transform = `translate(0px, 0px)`;
      });
      done();
    },
    afterEnter(el) {
      // el.style.height = "auto";
      // el.style.height = this.curHeight;
      // console.log("AE");
    }
  }
};
</script>

<style scoped></style>
