import NextAuth from "next-auth";
import { authConfig } from "@/lib/auth";

const handler = NextAuth(authConfig);
// ADDED ON 21-10-2024 by watching Elliott Chong video
export const runtime = 'egde'

export { handler as GET, handler as POST };
