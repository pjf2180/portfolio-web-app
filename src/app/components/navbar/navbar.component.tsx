"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItem {
  href: string;
  displayText: string;
}
export function Navbar() {
  const pathname = usePathname();
  const styleOne: string = "text-black";
  const styleTwo: string = "border-[#f8f8f8] text-white";
  const colorStyles = pathname === "/" ? styleTwo : styleOne;
  
  const menuItems: MenuItem[] = [
    {
      displayText: "Home",
      href: "/",
    },
    {
      displayText: "Projects",
      href: "/projects",
    },
    {
      displayText: "About me",
      href: "/about",
    },
  ];
  return (
    <div className="flex p-8 z-[1] relative">
      <ul className="flex">
        {menuItems.map((menuItem: MenuItem, idx) => {
          const firstSegment: string = pathname.split('/')[1];
          const isActive: boolean = firstSegment === menuItem.href.slice(1);
          const isActiveStyle = isActive ? "font-semibold" : "font-medium";
          return (
            <li
              className={`border-r-[1px] text-sm py-2 px-4 leading-tight ${colorStyles} ${isActiveStyle}`}
            >
              <Link href={menuItem.href}>
                {" "}
                0{idx + 1} : {menuItem.displayText}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
