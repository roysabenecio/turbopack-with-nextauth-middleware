import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        pelNum: {
          label: "Username",
        },
        password: { label: "Password" },
      },
      async authorize(credentials) {
        return {
          id: "id",
        };
      },
    }),
  ],
  callbacks: {
    jwt: ({ token }) => {
      return token;
    },
    session: ({ session, token }) => {
      return {
        ...session,
        token,
      };
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
