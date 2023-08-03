import type { User } from "@/model/user";

import { coreApi } from "./api";

type UserResponse = {
  userId: string;
};

const toUser = (userResponse: UserResponse): User => {
  return {
    userId: userResponse.userId,
  };
};

export const getUserMe = async (): Promise<User> => {
  const userResponse = (await coreApi.get<UserResponse>("/users/me")).data;

  return toUser(userResponse);
};
