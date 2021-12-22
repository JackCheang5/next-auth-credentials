import { compare } from 'bcryptjs';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from "../../../lib/prisma";

export default NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 3 * 60, // 3 minutes
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      async authorize(credentials, req) {
        // check if user is in database
        const user = await prisma.user.findUnique({
          where: {
            username: credentials.username,
          },
        });
        if (!user) {
          return null;
        }
        // check if password is correct
        const valid = await compare(credentials.password, user.password);
        if (!valid) {
          return null;
        }
        // return
        return user;
      },
    })
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      if (user) {
        token.id = user.id;
        token.username = user.username;
      }
      return token;
    },
    async session({ session, token, user }) {
      if (token) {
        session.user.name = token.username;
      }
      return session;
    }
  },
  secret: process.env.JWT_SECRET,
})