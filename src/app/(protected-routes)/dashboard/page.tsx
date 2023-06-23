"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";

export default async function Page() {
  return (
    <>
      <Link href={"/dashboard"}>To Dashboard</Link>;
      <Link href={"/sample"}>To Sample</Link>;<h1>Dashboard</h1>
      <button onClick={() => signOut()}>Logout</button>
    </>
  );
}
