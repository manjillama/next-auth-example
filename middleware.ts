import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {
    // Ref: https://next-auth.js.org/configuration/nextjs#advanced-usage
  },
  { pages: { signIn: "/signin", error: "/signin" } }
);

export const config = {
  matcher: ["/signin", "/dashboard", "/app", "/profile"],
};
