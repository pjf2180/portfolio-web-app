"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon } from "../menu-icon/menu-icon.component";
import { useEffect, useState } from "react";

interface MenuItem {
  href: string;
  displayText: string;
}
export function Navbar() {
  const pathname = usePathname();
  const styleOne: string = "text-white sm:text-black";
  const styleTwo: string = "border-[#f8f8f8] text-white";
  const colorStyles = pathname === "/" ? styleTwo : styleOne;
  const [menuIsOpen, setMenuIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    const handleResize = () => {
      setMenuIsOpen(!mediaQuery.matches);
      setIsMobile(mediaQuery.matches);
    }

    handleResize();
    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  const handleMenuIconClick = () => {
    setMenuIsOpen((x) => !x);
  };

  const handleNavOptionClick = () => {
    if (isMobile) {
      setMenuIsOpen(false);
    }
  };

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
    <div className="flex flex-col z-[1] justify-end sm:justify-start py-4 sm:py-8 fixed top-0 left-0 right-0 sm:static bg-black sm:bg-transparent">
      <div className="sm:hidden flex justify-end px-4 bg-black">
        <button onClick={handleMenuIconClick}>
          <MenuIcon />
        </button>
      </div>
      <ul
        className={`${
          !menuIsOpen ? "hidden" : ""
        } flex flex-col sm:flex-row mt-4`}
      >
        {menuItems.map((menuItem: MenuItem, idx) => {
          const firstSegment: string = pathname.split("/")[1];
          const isActive: boolean = firstSegment === menuItem.href.slice(1);
          const isActiveStyle = isActive ? "font-semibold" : "font-medium";
          return (
            <li
              key={menuItem.displayText}
              className={`max-sm:border-b-[1px] py-4 sm:border-r-[1px] text-right text-sm  px-4 leading-tight ${colorStyles} ${isActiveStyle} `}
              onClick={() => handleNavOptionClick()}
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
