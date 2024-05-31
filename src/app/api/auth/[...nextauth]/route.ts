import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import axios from "axios";
import { login } from "@/services/auth";

type TokenObject = {
  accessToken: string;
  refreshToken: string;
  accessTokenExpiry: Date;
};

type AuthCredentials = Record<"email" | "password", string> | undefined;

async function refreshAccessToken(token: TokenObject) {
  try {
    // Get a new set of tokens with a refreshToken

    const tokenResponse = await axios.post<any, any>(
      process.env.API_URL + "auth/refresh",
      {
        headers: {
          Bearer: token.refreshToken,
        },
      },
    );

    return {
      ...token,
      accessToken: tokenResponse.accessToken,
      accessTokenExpiry: tokenResponse.accessTokenExpiry,
      refreshToken: tokenResponse.refreshToken,
    };
  } catch (error) {
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

const providers = [
  Credentials({
    name: "Credentials",
    credentials: {
      email: { label: "Email", type: "email" },
      password: { label: "Password", type: "password" },
    },
    async authorize(credentials: AuthCredentials): Promise<any> {
      if (!credentials) return null;

      let accessToken = undefined;
      let refreshToken = undefined;
      let accessTokenExpiry = undefined;

      try {
        const loginResponse = await login({
          email: credentials.email,
          password: credentials.password,
        });

        accessToken = loginResponse.accessToken;

        refreshToken = loginResponse.refreshToken;
        accessTokenExpiry = Date.now() + 24 * 60 * 60 * 1000;
      } catch (error) {
        console.error("Login error:", error);
        return null;
      }

      return {
        id: 1,
        name: credentials.email,
        email: credentials.email,
        accessToken: accessToken,
        accessTokenExpiry: accessTokenExpiry,
        refreshToken: refreshToken,
      };
    },
  }),
];

const callbacks = {
  jwt: async ({ token, user }: { token: any; user: any }) => {
    if (user) {
      // This will only be executed at login. Each next invocation will skip this part.
      token.accessToken = user.accessToken;
      token.accessTokenExpiry = user.accessTokenExpiry;
      token.refreshToken = user.refreshToken;
    }

    // If accessTokenExpiry is 24 hours, we have to refresh token before 24 hours pass.
    const shouldRefreshTime = token.accessTokenExpiry - Date.now();

    // If the token is still valid, just return it.

    if (shouldRefreshTime > 0) {
      return Promise.resolve(token);
    } else {
      token = await refreshAccessToken(token);
      return Promise.resolve(token);
    }
  },

  session: async ({ session, token }: { session: any; token: any }) => {
    // Here we pass accessToken to the client to be used in authentication with your API
    session.accessToken = token.accessToken;
    session.accessTokenExpiry = token.accessTokenExpiry;
    session.error = token.error;

    return Promise.resolve(session);
  },
};

export const authOptions = {
  providers,
  pages: {
    signIn: "/signup",
  },
  callbacks,
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
