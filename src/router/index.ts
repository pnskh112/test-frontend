import { storeToRefs } from "pinia";
import { createRouter, createWebHistory } from "vue-router";

import { checkSession } from "@/application/authApplication";
import { useAuthStore } from "@/store/authStore";

import routes from "./routes";

const router = createRouter({
  history: createWebHistory("/"),
  routes: routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

router.beforeEach(async (to) => {
  const { authenticated } = storeToRefs(useAuthStore());

  if (to.name === "login") {
    if (authenticated.value) {
      return { name: "home" };
    } else {
      await checkSession();
      if (authenticated.value) {
        return { name: "home" };
      } else {
        true;
      }
    }
  } else {
    if (authenticated.value) {
      return true;
    } else {
      await checkSession();
      if (authenticated.value) {
        return true;
      } else {
        return { name: "login" };
      }
    }
  }
});

export default router;
