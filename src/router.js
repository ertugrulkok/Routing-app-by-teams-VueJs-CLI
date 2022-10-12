import { createRouter, createWebHistory } from "vue-router";
import TeamsList from "./pages/TeamsList.vue";
import UserList from "./pages/UserList.vue";
import TeamMembers from "./components/teams/TeamMembers.vue";
import NotFound from "./pages/NotFound.vue";
import TeamsFooter from "./pages/TeamsFooter.vue";
import UserFooter from "./pages/UserFooter.vue";
// import TeamHeader from "./pages/TeamHeader.vue";
import UserHeader from "./pages/UserHeader.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/teams" },
    {
      name: "teams",
      path: "/teams",
      meta: { needsAuth: true },
      components: {
        default: TeamsList,
        footer: TeamsFooter,
        //  header: TeamHeader,
      },
      children: [
        // 1.child
        {
          name: "team-members",
          path: ":teamIDp",
          components: {
            default: TeamMembers,
            // sibling: UserHeader,
          },
          props: true,
        },
        // 2.child
        {
          path: "test",
          component: UserHeader,
        },
      ],
    }, // www.domain.com/teams => TeamsList
    {
      path: "/users",
      components: {
        default: UserList,
        footer: UserFooter,
        //  header: UserHeader,
      },
      beforeEnter(to, from, next) {
        console.log("users beforEnter");
        console.log(to, from);
        next();
      },
    },

    { path: "/:notFound(.*)", component: NotFound },
  ],
  linkActiveClass: "ownActiveClass",
  scrollBehavior(to, from, savedPosition) {
    // to = wohin gehen wir
    // from = von wo kommen wir
    //savedPosition = position im browser
    // console.log(to, from, savedPosition);
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

router.beforeEach(function (to, from, next) {
  // to = wohin ?
  // from = von wo ?
  // next = möglich ?
  console.log("Global beforeEach");
  console.log(to, from);

  if (to.meta.needsAuth) {
    console.log("Braucht eine Authentification!");
    next();
  } else {
    next();
  }
});

router.afterEach(function (to, from, failure) {
  console.log("global after each");
  console.log(to, from);
  console.log(failure);
});

export default router; 