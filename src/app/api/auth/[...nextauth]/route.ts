import NextAuth, { DefaultSession, Session } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import axios from "axios";
import { login } from "@/services/auth";
import { JWT } from "next-auth/jwt";

// Type definitions
type TokenObject = {
  accessToken: string;
  refreshToken: string;
  accessTokenExpiry: any;
};

type AuthCredentials = Record<"email" | "password", string> | undefined;

// Function to refresh access token
async function refreshAccessToken(token: TokenObject | JWT) {
  try {
    const tokenResponse = await axios.post<any>(
      process.env.API_URL + "auth/refresh",
      {},
      {
        headers: {
          Authorization: `Bearer ${token.refreshToken}`,
        },
      },
    );

    return {
      ...token,
      accessToken: tokenResponse.data.accessToken,
      accessTokenExpiry: Date.now() + 24 * 60 * 60 * 1000, // assuming token is valid for another 24 hours
      refreshToken: tokenResponse.data.refreshToken,
    };
  } catch (error) {
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

// Providers configuration
const providers = [
  Credentials({
    name: "Credentials",
    credentials: {
      email: { label: "Email", type: "email" },
      password: { label: "Password", type: "password" },
    },
    async authorize(credentials: AuthCredentials) {
      if (!credentials) return null;

      try {
        const loginResponse = await login({
          email: credentials.email,
          password: credentials.password,
        });

        return {
          id: credentials.email, // Using email as id since it's unique and a string
          name: credentials.email,
          email: credentials.email,
          accessToken: loginResponse.accessToken,
          accessTokenExpiry: Date.now() + 24 * 60 * 60 * 1000, // 24 hours from now
          refreshToken: loginResponse.refreshToken,
        };
      } catch (error) {
        console.error("Login error:", error);
        return null;
      }
    },
  }),
];

// Callback functions
const callbacks = {
  jwt: async ({ token, user }: { token: TokenObject | JWT; user: any }) => {
    if (user) {
      token.accessToken = user.accessToken;
      token.accessTokenExpiry = user.accessTokenExpiry;
      token.refreshToken = user.refreshToken;
    }

    // Vérifiez que l'objet user est défini avant d'essayer d'accéder à ses propriétés
    if (user && user.accessTokenExpiry) {
      const shouldRefreshTime = user.accessTokenExpiry - Date.now();

      if (shouldRefreshTime > 0) {
        return token;
      } else {
        return await refreshAccessToken(token);
      }
    } else {
      // Si l'objet user est undefined ou si la propriété accessTokenExpiry est manquante,
      // retournez simplement le jeton sans le mettre à jour
      return token;
    }
  },

  session: async ({
    session,
    token,
  }: {
    session: Session;
    token: TokenObject | JWT;
  }) => {
    session.user.token = {
      accessToken: token.accessToken,
      refreshToken: token.refreshToken,
      accessTokenExpiry: token.accessTokenExpiry,
    };
    return session;
  },
};

// Exporting the authentication options
export const authOptions = {
  providers,
  pages: {
    signIn: "/login",
  },
  callbacks,
  secret: process.env.NEXTAUTH_SECRET,
};

// Handling authentication
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
