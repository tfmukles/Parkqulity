"use client";

import config from "@/config/config.json";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Logo = ({ src }: { src?: string }) => {
  // destructuring items from config object
  const {
    logo,
    logo_width,
    logo_height,
    logo_text,
    title,
  }: {
    logo: string;
    logo_width: any;
    logo_height: any;
    logo_text: string;
    title: string;
  } = config.site;

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const logoPath = src ? src : logo;

  const [isHomepage, setIsHomepage] = useState(false);
  // check is homepage or not
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsHomepage(window.location.pathname === "/");
    }
  }, []);

  return (
    <Link href={isHomepage ? "#home" : "/"} className="navbar-brand inline-block">
      {logoPath ? (
        <Image
          width={logo_width.replace("px", "") * 2}
          height={logo_height.replace("px", "") * 2}
          src={logoPath}
          alt={title}
          priority
          style={{
            height: logo_height.replace("px", "") + "px",
            width: logo_width.replace("px", "") + "px",
          }}
        />
      ) : logo_text ? (
        logo_text
      ) : (
        title
      )}
    </Link>
  );
};

export default Logo;
