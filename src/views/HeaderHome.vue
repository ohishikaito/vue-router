<template>
  <nav>
    <h2>HeaderHome</h2>
    <router-link to="/" active-class="link--active" class="link" exact
      >Home</router-link
    >
    <br />
    <router-link to="/Users" active-class="link--active" class="link" exact
      >users</router-link
    >
    <router-link :to="'/users/' + 1 + '/profile?lang=ja#next-user'"
      >次のユーザー</router-link
    >
    <button @click="inc(2)">+1</button>
    <button @click="dec(2)">+1</button>
  </nav>
</template>

<script>
import { mapActions } from "vuex";
// import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapActions("count", ["inc", "dec"]),
    // ...mapMutations(["inc", "dec"]),
    // inc() {
    //   // this.$store.commit("inc", 2);
    //   this.$store.dispatch("inc", 2);
    // },
    // dec() {
    //   // this.$store.commit("dec", 2);
    //   this.$store.dispatch("dec", 2);
    // },
  },
};
</script>

<style scoped>
.link--active {
  font-size: 20px;
}
</style>
