import type { NextApiRequest, NextApiResponse } from "next"
import type { Session } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import NextAuth from "next-auth"
declare module "next-auth" {
  interface Session {
    someCookie?: string
  }
}

export default async function auth(req: NextApiRequest, res: NextApiResponse) {

  const providers: any[] = [
    // CredentialsProvider(...),
    // GoogleProvider(),
  ]

  if(req.query.nextauth && req.query.nextauth.includes("callback") && req.method === "POST") {
    console.log(
      "Handling callback request from my Identity Provider",
      req.body
    )
  }

  // Get a custom cookie value from the request
  const someCookie = req.cookies["x-auth-token"]

  return await NextAuth(req, res, {
    providers,
    callbacks: {
      session({ session, token }) {
        // Return a cookie value as part of the session
        // This is read when `req.query.nextauth.includes("session") && req.method === "GET"`
        session.someCookie = someCookie
        return session
      }
    }
  })
}