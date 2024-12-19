"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();
  return (
    <nav className="bg-red-400 p-5">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className={path == "/" ? "text-blue-600" : ""}>
            Homepage
          </Link>
        </li>
        <li>
          <Link href="/shop" className={path == "/shop" ? "text-blue-600" : ""}>
            Shop
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={path == "/about" ? "text-blue-600" : ""}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard"
            className={path == "/dashboard" ? "text-blue-600" : ""}
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/profile"
            className={path == "/dashboard/profile" ? "text-blue-600" : ""}
          >
            Dashboard Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
