<template>
  <div>
    <h3>Home</h3>
    <button @click="toUsers">Usersへ</button>
    <p>{{ count }}</p>
    <p>aaa</p>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    toUsers() {
      // this.$router.push({ path: "users" });
      // this.$router.push("users");
      this.$router.push({
        name: "users-id-profile",
        params: { id: 1 },
      });
    },
  },
};
</script>
