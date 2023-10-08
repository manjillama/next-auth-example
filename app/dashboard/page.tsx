import { getServerSession } from "next-auth";
import React from "react";
import { options } from "../api/auth/[...nextauth]/options";
import Link from "next/link";

const Dashboard = async () => {
  const session = await getServerSession(options);
  console.log("From dashboard: (Server session)", session);

  return (
    <div className="container mx-auto px-[15px] py-4">
      <h1 className="text-4xl font-bold">
        👋 Welcome {session?.user?.name?.split(" ")[0]}!
      </h1>
      <br />
      <p>
        I&apos;m super glad that you&apos;re here. Is this example project was
        helpful then give it a star on{" "}
        <Link
          target="_blank"
          className="text-sky-500 hover:underline"
          href="https://github.com/manjillama/next-auth-example"
        >
          github
        </Link>
        .
      </p>
    </div>
  );
};

export default Dashboard;
