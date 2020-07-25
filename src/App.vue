<template>
  <div>
    <nav>
      <router-link to="/" active-class="link--active" class="link" exact>Home</router-link>
      <br />
      <router-link to="/users" active-class="link--active" class="link" exact>users</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.link--active {
  font-size: 20px;
}
</style>
