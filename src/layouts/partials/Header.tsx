"use client";

import Logo from "@/components/Logo";
import config from "@/config/config.json";
import menu from "@/config/menu.json";
import DynamicIcon from "@/helpers/DynamicIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef } from "react";

//  child navigation link interface
export interface IChildNavigationLink {
  name: string;
  url: string;
}

// navigation link interface
export interface INavigationLink {
  name: string;
  url: string;
  hasChildren?: boolean;
  children?: IChildNavigationLink[];
}

const Header = () => {
  // distructuring the main menu from menu object
  const { main }: { main: INavigationLink[] } = menu;
  const { navigation_button, settings, site } = config;
  // get current path
  const pathname = usePathname();

  // scroll to top on route change
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  const header = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const scrollHandler = () => {
      if (header.current && window.scrollY > 0) {
        header.current.classList.add("scrolled");
      } else if (header.current) {
        header.current.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <header
      ref={header}
      className={`header z-30 ${
        settings.sticky_header ? "sticky top-0 z-50" : ""
      }`}
    >
      <nav className="navbar max-w-[1490px] mx-auto px-5">
        {/* logo */}
        <div className="order-0 leading-none">
          <Logo />
        </div>
        {/* navbar toggler */}
        <input id="nav-toggle" type="checkbox" className="hidden" />
        <label
          id="show-button"
          htmlFor="nav-toggle"
          className="order-3 flex cursor-pointer items-center text-white lg:order-1 lg:hidden"
        >
          <svg className="h-6 fill-current" viewBox="0 0 20 20">
            <title>Menu Open</title>
            <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z"></path>
          </svg>
        </label>
        <label
          id="hide-button"
          htmlFor="nav-toggle"
          className="order-3 hidden cursor-pointer items-center text-white lg:order-1"
        >
          <svg className="h-6 fill-current" viewBox="0 0 20 20">
            <title>Menu Close</title>
            <polygon
              points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
              transform="rotate(45 10 10)"
            ></polygon>
          </svg>
        </label>
        {/* /navbar toggler */}

        <ul
          id="nav-menu"
          className="navbar-nav order-3 hidden w-full pb-6 lg:order-1 lg:flex lg:w-auto lg:pb-0 lg:space-x-6 xl:space-x-10"
        >
          {main.map((menu, i) => (
            <React.Fragment key={`menu-${i}`}>
              {menu.hasChildren ? (
                <li className="nav-item nav-dropdown group relative">
                  <span
                    className={`nav-link inline-flex items-center ${
                      menu.children?.map(({ url }) => url).includes(pathname) ||
                      menu.children
                        ?.map(({ url }) => `${url}/`)
                        .includes(pathname)
                        ? "active"
                        : ""
                    }`}
                  >
                    {menu.name}
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </span>
                  <ul className="nav-dropdown-list hidden group-hover:block lg:invisible lg:absolute lg:block lg:opacity-0 lg:group-hover:visible lg:group-hover:opacity-100">
                    {menu.children?.map((child, i) => (
                      <li className="nav-dropdown-item" key={`children-${i}`}>
                        <Link
                          href={child.url}
                          className={`nav-dropdown-link block ${
                            pathname === `${child.url}/` ||
                            pathname === child.url
                              ? "active"
                              : ""
                          }`}
                        >
                          {child.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li className="nav-item">
                  <Link
                    href={menu.url}
                    className={`nav-link block ${
                      pathname === `${menu.url}/` || pathname === menu.url
                        ? "active"
                        : ""
                    }`}
                  >
                    {menu.name}
                  </Link>
                </li>
              )}
            </React.Fragment>
          ))}
          {navigation_button.enable && (
            <li className="mt-4 inline-flex lg:hidden">
              <Link
                className="btn btn-sm btn-primary items-center flex font-primary"
                href={navigation_button.link}
              >
                <DynamicIcon
                  className="inline-block mr-2 text-sm"
                  icon="FaPhone"
                />
                {navigation_button.label}
              </Link>
            </li>
          )}
        </ul>
        <div className="hidden order-2 lg:block lg:ml-0">
          {navigation_button.enable && (
            <Link
              className="btn btn-sm btn-primary items-center flex font-primary"
              href={navigation_button.link}
            >
              <DynamicIcon
                className="inline-block mr-2 text-sm"
                icon="FaPhone"
              />
              {navigation_button.label}
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
