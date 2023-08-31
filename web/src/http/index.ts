import { UsersApi, Configuration } from "../../__generated__/api";

export const userApi = new UsersApi(
  new Configuration({ basePath: "https://dummyjson.com" })
);

userApi.listUsersAdmin;

userApi.listUsersInternal;
