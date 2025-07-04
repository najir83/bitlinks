"use client"; // only if you're using Next.js App Router

import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingComponent = () => {
  const el = useRef(null); // for storing the HTML element
  const typed = useRef(null); // for storing the Typed instance

  useEffect(() => {
    typed.current = new Typed(el.current, {
      strings: [
        "Shorten your URLs instantly",
        "Super simple and fast service",
        "No sign-up needed — ever 🙅‍♂️",
        "Just use it. Totally free 💯",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typed.current.destroy(); // destroy instance on unmount
    };
  }, []);

  return (
    <div className="text-xl font-bold">
      <span ref={el} />
    </div>
  );
};

export default TypingComponent;
