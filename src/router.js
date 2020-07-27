import Vue from "vue";
import Router from "vue-router";

// ChuckNameを変えたり、同じ名前にすると統一できる。まとめて持ってこれる。
// 最初に必要最低限のデータを遅延ローディングで読み込ませる
const Home = () =>
  import(/* webpackChunkName: "Homeeeeeeeeee" */ "./views/Home.vue");
const Users = () => import("./views/Users.vue");
const UsersPosts = () => import("./views/UsersPosts.vue");
const UsersProfile = () => import("./views/UsersProfile.vue");
const HeaderHome = () => import("./views/HeaderHome.vue");
const HeaderUsers = () => import("./views/HeaderUsers.vue");

Vue.use(Router); // Vue.use(プラグイン) : プラグインを使用する

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
      path: "/users/:id",
      default: Users,
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
      redirect: "/",
    },
  ],

  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve) => {
      this.app.$root.$once("triggerScroll", () => {
        // 第一引数:カスタムイベントを受け取るイベント名 ,第二引数:イベントの中の処理
        let position = { x: 0, y: 0 };
        if (savedPosition) {
          position = savedPosition;
        }
        if (to.hash) {
          position = {
            selector: to.hash,
          };
        }
        resolve(position);
      });
    });
  },
});
