<template>
  <div>
    <h3>Home</h3>
    <button @click="toUsers">Usersへ</button>
    <input type="text" v-model="message" />
    <!-- <input type="text" :value="message" @input="updateMessage" /> -->
    <p>{{ message }}</p>
    <p>{{ doubleCount }}</p>
    <p>{{ tripleS }}</p>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";

export default {
  computed: {
    // ...mapGetters("count", ["doubleCount", "tripleS"]),
    // message() {
    //   return this.$store.getters.message;
    // },
    message: {
      get() {
        return this.$store.getters.message;
      },
      set(value) {
        this.$store.dispatch("updateMessage", value);
      },
    },
    doubleCount() {
      return this.$store.getters["count/doubleCount"];
    },
    tripleS() {
      return this.$store.getters["count/tripleS"];
    },
  },
  methods: {
    // updateMessage(e) {
    //   this.$store.dispatch("updateMessage", e.target.value);
    // },
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
