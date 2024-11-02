import Link from "next/link";
import React from "react";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav className="flex flex-row items-center gap-x-8">
        <h1 className="text-3xl text-blue-600">Dashboard</h1>
        <ul className="flex flex-row gap-x-4">
          <li>
            <Link href="/dashboard/">Dashboard</Link>
          </li>
          <li>
            <Link href="/dashboard/analytics">Analytics</Link>
          </li>
          <li>
            <Link href="/dashboard/users">Users</Link>
          </li>
        </ul>
      </nav>
      <hr className="my-4" />
      {children}
    </div>
  );
}
