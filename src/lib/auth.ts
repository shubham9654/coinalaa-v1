import { NextAuthOptions } from 'next-auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { db } from '@/lib/db'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  providers: [
    {
      id: 'bitcoin',
      name: 'Bitcoin',
      type: 'oauth',
      authorization: {
        url: 'https://github.com/login/oauth/authorize',
        params: {
          scope: 'read:user user:email'
        }
      },
      token: 'https://github.com/login/oauth/access_token',
      userinfo: {
        url: 'https://api.github.com/user',
        async request({ tokens }) {
          const response = await fetch('https://api.github.com/user', {
            headers: {
              Authorization: `Bearer ${tokens.access_token}`
            }
          })
          return response.json()
        }
      },
      profile(profile) {
        return {
          id: profile.id.toString(),
          name: profile.name || profile.login,
          email: profile.email,
          image: profile.avatar_url,
          username: profile.login
        }
      },
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!
    }
  ],
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user && token?.sub) {
        session.user.id = token.sub
      }
      return session
    },
    jwt: async ({ user, token }) => {
      if (user) {
        token.uid = user.id
      }
      return token
    }
  },
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/auth/signin',
    signUp: '/auth/signup'
  }
}