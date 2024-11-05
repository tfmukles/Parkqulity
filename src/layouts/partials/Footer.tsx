"use client";

import Social from "@/components/Social";
import config from "@/config/config.json";
import menu from "@/config/menu.json";
import social from "@/config/social.json";
import { markdownify } from "@/lib/utils/textConverter";
import Link from "next/link";

const Footer = () => {
  const { copyright } = config.params;
  const { footer_bottom } = menu;
  const { left, right, middle } = menu.footer;

  return (
    <footer className="bg-body">
      <div className="container">
        <div className="row justify-between gy-4 lg:gy-0">
          <div className="col-6 lg:col-4">
            <ul className="space-y-4">
              {left.map((item, i) => {
                return (
                  <li key={i}>
                    <Link
                      href={item.url}
                      className="font-medium hover:text-primary transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <h4 className="mt-20">500,000+</h4>
            <p className="capitalize mt-4">
              <b>cars parked by Parqulity since 2019</b>
            </p>
          </div>
          <div className="col-auto">
            <ul className="space-y-4">
              {middle.map((item, i) => {
                return (
                  <li key={i}>
                    <Link
                      href={item.url}
                      className="font-medium hover:text-primary transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-auto">
            <ul className="space-y-4">
              {right.map((item, i) => {
                return (
                  <li key={i}>
                    <Link
                      href={item.url}
                      className="font-medium hover:text-primary transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-auto">
            <Social source={social.main} className="social-icons" />
          </div>
        </div>
        <div className="justify-between md:flex flex-wrap border-t mt-16 border-border border-dark/60 text-center text-[#ACACAC] py-7 space-y-4 md:space-y-0">
          <p dangerouslySetInnerHTML={markdownify(copyright)} />
          <ul className="justify-between flex text-center [&>*:not(:first-child)]:after:content-[''] [&>*:not(:first-child)]:after:absolute [&>*:not(:first-child)]:after:top-1/2 [&>*:not(:first-child)]:after:left-0 [&>*:not(:first-child)]:after:h-[55%] [&>*:not(:first-child)]:after:w-px [&>*:not(:first-child)]:after:bg-gray/70 [&>*:not(:first-child)]:after:z-10 [&>*:not(:first-child)]:after:translate-x-1/2 [&>*:not(:first-child)]:after:-translate-y-1/2">
            {footer_bottom.map((item, index) => {
              return (
                <li key={index} className="relative px-3 max-md:flex-1">
                  <Link
                    className="hover:text-primary flex items-center justify-center h-full"
                    href={item.url}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
