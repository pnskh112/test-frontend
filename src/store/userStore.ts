import { defineStore } from "pinia";
import { ref } from "vue";

import { getUserMe } from "@/adaptor/user";
import type { User } from "@/model/user";

export const useUserStore = defineStore("user", () => {
  const user = ref<User | null>(null);
  const setUser = async (): Promise<void> => {
    const _user = await getUserMe();
    user.value = _user;
  };

  const isLoading = ref<boolean>(false);

  return {
    user,
    setUser,
    isLoading,
  };
});
