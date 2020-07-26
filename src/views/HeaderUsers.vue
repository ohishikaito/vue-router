<template>
  <nav>
    <h2>HeaderUsers</h2>
    <router-link to="/" active-class="link--active" class="link" exact>Home</router-link>
    <br />
    <router-link to="/Users" active-class="link--active" class="link" exact>users</router-link>
  </nav>
</template>

<style scoped>
.link--active {
  font-size: 20px;
}
</style>
