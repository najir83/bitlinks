"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathName = usePathname();
  const [showNav, setShowNav] = useState(0);

  useEffect(() => {
    // Wait until client-side
    setMounted(true);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // set initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) return null; // Prevent mismatch

  return (
    <nav className="text-white relative flex flex-col justify-center h-[8vh] bg-blue-500">
      <div className="flex justify-between px-4 items-center">
        <Link href="/" className="font-bold text-xl">BitLinks</Link>
        <ul hidden={isMobile} className="flex space-x-5">
          {["/", "/about", "/shorten", "/contact"].map((path, i) => {
            const label = ["Home", "About", "Shorten", "Contact Us"][i];
            return (
              <Link
                href={path}
                key={path}
                className={`${
                  pathName === path ? "bg-blue-700 font-bold" : ""
                } hover:font-bold hover:bg-blue-700 px-3 py-2 rounded-2xl`}
              >
                <li>{label}</li>
              </Link>
            );
          })}
        </ul>
        <ul className="flex gap-5">
          <li>
            <Link href="/shorten">
              <button className="bg-sky-400 px-2 py-1 lg:px-3 lg:py-2 hover:bg-blue-700 cursor-pointer font-bold rounded-2xl">
                Try Now
              </button>
            </Link>
          </li>
          <li>
            <Link target="_blank" href="https://github.com/najir83/">
              <button className="bg-white text-black fa-brands text-2xl lg:text-3xl fa-github   cursor-pointer rounded-full">
                {/* Github */}
              </button>
            </Link>
          </li>
          <li>
            {isMobile && (
              <button
                onClick={() => setShowNav(!showNav)}
                className={`fa-solid ${
                  showNav ? "fa-xmark text-2xl" : "fa-bars text-xl"
                } px-2 py-1 text-white `}
              ></button>
            )}
          </li>
        </ul>
      </div>
      {isMobile && (
        <div
          style={{
            maxHeight: showNav ? "500px" : "0px",
            opacity: showNav ? 1 : 0,
            overflow: "hidden",
            transition: "all 0.4s ease",
            pointerEvents: showNav ? "auto" : "none", // 👈 this is the key
          }}
        >
          <ul className="  bg-blue-500 w-full  absolute top-17  py-5 pb-10 px-3 flex flex-col ">
            {["/", "/about", "/shorten", "/contact"].map((path, i) => {
              const label = ["Home", "About", "Shorten", "Contact Us"][i];
              return (
                <Link
                  //  onClick={()=>setShowNav(!showNav)}
                  href={path}
                  key={path}
                  className={`${
                    pathName === path ? "bg-blue-700 font-bold" : ""
                  } hover:font-bold hover:bg-blue-700 px-3 py-2 rounded-2xl`}
                >
                  <li>{label}</li>
                </Link>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
