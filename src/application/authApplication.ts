import { getSession, postLogin, postLogout } from "@/adaptor/auth";
import { useAuthStore } from "@/store/authStore";
import { useUserStore } from "@/store/userStore";

export class LoginFailedError extends Error {}

export const login = async (id: string, password: string): Promise<void> => {
  const { setAuthState } = useAuthStore();

  try {
    const result = await postLogin(id, password);
    if (result) {
      setAuthState(true);
      await initializeStores();
    } else {
      setAuthState(false);
      throw new LoginFailedError("Login failed");
    }
  } catch (e) {
    setAuthState(false);
    throw new LoginFailedError("Login failed");
  }
};

export const checkSession = async (): Promise<void> => {
  const { setAuthState } = useAuthStore();
  const res = await getSession().catch(() => null);
  if (res == null) {
    setAuthState(false);
  } else {
    setAuthState(true);
    await initializeStores();
  }
};

export const logout = async (): Promise<void> => {
  const { setAuthState } = useAuthStore();

  try {
    const result = await postLogout();

    if (result) {
      setAuthState(false);
      resetStores();
    } else {
      //
    }
  } catch {
    //
  }
};

/**
 * 認証後に必要なデータを取得してStoreに入れる
 */
export const initializeStores = async () => {
  const { setUser } = useUserStore();
  await setUser();
};

const resetStores = () => {
  const userStore = useUserStore();

  userStore.$dispose();
};
