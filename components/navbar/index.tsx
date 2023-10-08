"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import SignoutButton from "./signout-button";

export default function Navbar() {
  const pathname = usePathname();
  const { data: session } = useSession();
  console.log("From Navbar: (Client session)", session);

  return (
    <nav className="container mx-auto px-[15px]">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl">
          <Link href="/">NextAuth</Link>
        </h1>
        <ul className="flex space-x-2">
          {session ? (
            <li>
              <SignoutButton />
            </li>
          ) : (
            <>
              {pathname !== "/signin" ? (
                <li>
                  <Link className="px-4 py-2 block" href="/signin">
                    Log In
                  </Link>
                </li>
              ) : null}
              {pathname !== "/signup" ? (
                <li>
                  <Link className="p-2 block" href="/signup">
                    Sign Up
                  </Link>
                </li>
              ) : null}
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
