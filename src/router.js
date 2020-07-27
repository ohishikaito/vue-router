import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Users from "./views/Users.vue";
import UsersProfile from "./views/UsersProfile.vue";
import UsersPosts from "./views/UsersPosts.vue";
import HeaderUsers from "./views/HeaderUsers.vue";
import HeaderHome from "./views/HeaderHome.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      components: {
        default: Home,
        header: HeaderHome,
      },
    },
    {
      path: "/users",
      components: {
        default: Users,
        header: HeaderUsers,
      },
    },
    {
      path: "/users/:id",
      components: {
        default: Users,
        header: HeaderUsers,
      },
      props: {
        default: true,
        header: false,
      },
      children: [
        { path: "posts", component: UsersPosts },
        { path: "profile", component: UsersProfile, name: "users-id-profile" },
      ],
    },
    {
      path: "*",
      redirect: { path: "/" },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve) => {
      this.app.$root.$once("triggerScroll", () => {
        let position = { x: 0, y: 0 };
        if (savedPosition) {
          return savedPosition;
        }
        // console.log(to.hash);
        if (to.hash) {
          // console.log("triggerScroll");
          position = {
            selector: to.hash,
          };
        }
        resolve(position);
      });
    });
  },
});
