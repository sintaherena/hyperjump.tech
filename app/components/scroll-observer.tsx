"use client";

import { useEffect } from "react";

export default function ScrollObserver() {
  useEffect(() => {
    const handleScroll = () => {
      document.body.setAttribute(
        "data-scroll",
        window.scrollY > 0 ? "true" : "false"
      );
    };

    handleScroll(); // Call once to set initial state
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
}
