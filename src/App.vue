<template>
  <div style="width: 70%; padding-top: 50px">
    <router-view name="header"></router-view>
    <transition name="fade" mode="out-in" @before-enter="beforeEnter">
      <!--
      transitionのJSフックを使ってスクロールするタイミングを制御する
      @before-enterでDOMの描画前に実行する→ vue-routerが自動的にDOMの描画後に実行してくれる

      -->
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  methods: {
    beforeEnter() {
      this.$root.$emit("triggerScroll"); // $root:一番上のインスタンス
    },
  },
};
</script>

<style scoped>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
</style>
