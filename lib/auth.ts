import { CreateUserInput, UserInput, UserSessionInput } from "../types/User";
import axiosInstance from "./client-api";
import { signIn } from "next-auth/react";

const register = async (data: UserInput): Promise<any> => {
  await axiosInstance.post("auth/register", data);
  await authNextSignin({
    email: data.email,
    password: data.password,
  });
};

const login = async (data: any): Promise<any> => {
  try {
    const response = await axiosInstance.post("auth/login", data);
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

const authNextSignin = async (dataSession: UserSessionInput): Promise<any> => {
  await signIn("credentials", {
    email: dataSession.email,
    password: dataSession.password,
    redirect: false,
  });
};

export { register, login, authNextSignin };
