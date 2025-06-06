"use client";

import Link from "next/link";
import Image from "next/image";
import { Session } from "next-auth";
import { usePathname } from "next/navigation";

import Avatar from "./Avatar";
import { cn } from "@/lib/utils";

const Header = ({ session }: { session: Session }) => {
  const pathname = usePathname();

  return (
    <header className="my-10 flex items-center justify-between gap-5">
      <Link href="/">
        <Image src="/icons/logo.svg" width={40} height={40} alt="site-logo" />
      </Link>

      <ul className="flex flex-row items-center gap-8">
        <li>
          <Link
            href="/library"
            className={cn(
              "text-base cursor-pointer capitalize",
              pathname === "/library" ? "text-light-200" : "text-light-100"
            )}
          >
            library
          </Link>
        </li>

        <li>
          <Link
            href="/ask-librarian"
            className={cn(
              "text-base cursor-pointer capitalize",
              pathname === "/ask-librarian"
                ? "text-light-200"
                : "text-light-100"
            )}
          >
            ask librarian
          </Link>
        </li>

        <li>
          <Link
            href="/book-request"
            className={cn(
              "text-base cursor-pointer capitalize",
              pathname === "/book-request" ? "text-light-200" : "text-light-100"
            )}
          >
            request book
          </Link>
        </li>

        <li>
          <Link
            href="/rooms"
            className={cn(
              "text-base cursor-pointer capitalize",
              pathname === "/rooms" ? "text-light-200" : "text-light-100"
            )}
          >
            book room
          </Link>
        </li>

        <li>
          <Link href="/my-profile">
            <Avatar name={session?.user?.name || ""} />
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
