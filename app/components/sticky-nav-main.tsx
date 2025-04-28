"use client";

import { useScrolled } from "@/hooks/use-scrolled";

export default function StickyNavigationMain({
  children,
  isMenuOpen = false
}: {
  children: (params: {
    isScrolled: boolean;
    shouldBeWhite: boolean;
  }) => React.ReactNode;
  isMenuOpen?: boolean;
}) {
  const isScrolled = useScrolled();

  const shouldBeWhite = isScrolled || isMenuOpen;

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-[100] transition-all duration-500 ${
        shouldBeWhite
          ? "bg-white shadow-sm backdrop-blur-[3px]"
          : "bg-transparent"
      }`}>
      {children({ isScrolled, shouldBeWhite })}
    </nav>
  );
}
