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
    <button @click="inc">+1</button>
    <button @click="dec">+1</button>
  </nav>
</template>

<script>
export default {
  methods: {
    inc() {
      this.$store.state.count++;
    },
    dec() {
      this.$store.state.count--;
    },
  },
};
</script>

<style scoped>
.link--active {
  font-size: 20px;
}
</style>
