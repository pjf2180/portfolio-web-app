import styles from "./navbar.module.scss";
import Link from "next/link";

interface MenuItem {
  href: string;
  displayText: string;
}
export function Navbar() {
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
    {
      displayText: "Contact",
      href: "/contact",
    },
  ];
  return (
    <div className="flex p-8 z-[1] relative">
      <ul className="flex">
        {menuItems.map((menuItem: MenuItem,idx) => {
          return (
            <li className="border-r-[1px] border-[#d8d8d8] text-[#d8d8d8] font-extralight text-xs p-2 pr-4 pl-4 leading-tight">
              <Link href={menuItem.href}> 0{idx+1} : {menuItem.displayText}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
