import { UserInput, UserSessionInput } from "@/types/User";
import { signIn } from "next-auth/react";
import axiosInstance from "@/clients/storeFrontClient";

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

interface SignInResult {
  error?: string;
  status?: number;
  ok: boolean;
  url?: string | null;
}

const authNextSignin = async (dataSession: UserSessionInput): Promise<SignInResult> => {
  const result = await signIn("credentials", {
    email: dataSession.email,
    password: dataSession.password,
    redirect: false,
  }) as SignInResult;

  if (result.error) {
    console.error("authNextSignin error:", result.error);
    throw new Error(result.error);
  }

  return result;
};

export { register, login, authNextSignin };
