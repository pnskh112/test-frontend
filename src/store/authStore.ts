import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const authenticated = ref<boolean>(false);
  const setAuthState = (auth: boolean) => {
    authenticated.value = auth;
  };

  return { authenticated, setAuthState };
});
