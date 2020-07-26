<template>
  <div>
    <h3>Home</h3>
    <button @click="toUsers">Usersへ</button>
  </div>
</template>

<script>
export default {
  methods: {
    toUsers() {
      // this.$router.push({ path: "users" });
      // this.$router.push("users");
      this.$router.push({
        name: "users-id-profile",
        params: { id: 1 }
      });
    }
  }
};
</script>
