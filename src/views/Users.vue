<template>
  <div>
    <h3>Users</h3>
    <br />
    <router-link to="/users/1">1</router-link>
    <router-link to="/users/2">2</router-link>
    <h1>User No. {{ $route.params.id }}</h1>
    <!-- <h1>User No. {{ id }}</h1> -->
    <router-link :to="'/users/' + (Number(id) +1)+'/profile'">次のユーザー</router-link>
    <router-link
      :to="{name: 'users-id-profile', params: { id: Number(id) +1 }, query: {lang: 'ja'}, page:  2}"
    >次のユーザー</router-link>
    <!-- <router-view></router-view> -->
    <hr />
  </div>
</template>

<script>
export default {
  props: ["id"]
};
</script>