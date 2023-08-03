import { coreApi } from "./api";

type LoginResponse = {
  success: true;
};

export const postLogin = async (
  userName: string,
  password: string
): Promise<boolean> => {
  const result = await coreApi.post<LoginResponse>("/login", {
    userName,
    password,
  });
  return result.data.success;
};

type SessionResponse = {
  userId: string;
};

export const getSession = async (): Promise<{ userId: string } | null> => {
  const response = await coreApi.get<SessionResponse>("/session");
  if (response.status === 200) {
    return { userId: response.data.userId };
  } else {
    return null;
  }
};

type LogoutResponse = {
  success: true;
};

export const postLogout = async (): Promise<boolean> => {
  const response = await coreApi.post<LogoutResponse>("/session/logout");
  return response.data.success;
};
