"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavItem } from "../../lib/definitions";

export default function NavLink({ item }: { item: NavItem }) {
  const pathname = usePathname();

  // Determine if the current link is active based on its href matching the current pathname.
  const isActive = item.href === pathname;

  return (
    <div
      className={`w-full cursor-pointer select-none rounded-[32px] max-h-[48px] flex-1 ${
        isActive ? "bg-white" : "hover:bg-[#f3f3f5]"
      }`}
    >
      <Link
        href={item.href}
        className={`px-3 flex w-full h-full items-center gap-[10px] min-h-[32px] ${
          isActive && "[&>svg]:text-primary"
        }`}
      >
        {item.icon}
        <span className="text-sm">{item.title}</span>
      </Link>
    </div>
  );
}
