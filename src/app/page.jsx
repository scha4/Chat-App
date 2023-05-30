"use client";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Link href="/home">Home</Link>
      <Link href="/signup">Sign Up</Link>
      <Link href="/login">Login </Link>
    </>
  );
}
