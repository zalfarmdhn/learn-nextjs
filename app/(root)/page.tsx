import Link from "next/link";

export default function Home() {
  const randomId = Math.floor(Math.random() * 25);

  return (
    <>
      <h1 className="text-3xl">Welcome to Next.js</h1>
      <h3>Available routes : </h3>
      <div className="flex flex-col">
        <Link href="/dashboard">/dashboard</Link>
        <Link href="/dashboard/analytics">/dashboard/analytics</Link>
        <Link href="/dashboard/users">/dashboard/users</Link>
        <Link href="/about">/about</Link>
        <Link href="/albums">/albums</Link>
        <Link href={`/blog/${randomId}`}>/blog/[id]</Link>
      </div>
    </>
  );
}
