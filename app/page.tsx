import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function HomePage() {
  const session = await getServerSession(options);
  if (session) redirect("/dashboard");
  return (
    <main className="container mx-auto px-[15px] py-4">
      <div>
        <h1 className="text-4xl font-bold">👋 Hello Stranger!</h1>
        <br />
        <p>
          Login/signup using google, github or your personal credentials and
          visit your personal{" "}
          <Link href="/dashboard" className="text-sky-600 hover:underline">
            dashboard
          </Link>
          .
        </p>
        <p className="text-sm text-neutral-600">
          Created with Next.js 13, MongoDB, NextAuth.js, Tailwind CSS. Deployed
          with Vercel.
        </p>
      </div>
    </main>
  );
}
