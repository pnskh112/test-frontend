export default [
  {
    path: "/",
    redirect: "/login",
    children: [
      {
        path: "/login",
        name: "login",
        component: () => import("@/pages/LoginPage.vue"),
      },
      {
        path: "/",
        name: "home",
        component: () => import("@/pages/HomePage.vue"),
      },
    ],
  },
]
