// app/Footer.js or wherever
"use client";

import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-blue-500 flex flex-row justify-between items-center lg:p-10 h-[8vh] text-white py-4 ">
      <div className="flex items-center gap-1 text-sm md:text-base">
        Code By
        <span className="ml-1 flex items-center">
          <span className="text-2xl text-[#7AE2CF]">&lt;</span>
          Najir
          <span className="text-2xl text-[#7AE2CF]">/&gt;</span>
        </span>
      </div>

      <div className="flex gap-4 text-white">
        <Link
          href="https://www.linkedin.com/in/sk-najir-0b0177285/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="text-2xl lg:text-3xl" />
        </Link>
        <Link
          href="https://github.com/najir83"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="text-2xl lg:text-3xl" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
