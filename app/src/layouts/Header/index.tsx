import React from "react";
import ThemeToggle from "./components/ThemeToggle";
import Navbar from "./components/Navbar";
import Avatar from "./components/Avatar";

export default function Header() {
  return (
    <>
      <header
        className="pointer-events-none relative z-50 flex flex-none flex-col"
        // style="height:var(--header-height);margin-bottom:var(--header-mb)"
      >
        <div className="order-last mt-[calc(--spacing(16)-(--spacing(3)))]"></div>
        <Avatar />
        <div
          className="top-0 z-10 h-16 pt-6"
          // style="position:var(--header-position)"
        >
          <div
            className="sm:px-8 top-(--header-top,--spacing(6)) w-full"
            // style="position:var(--header-inner-position)"
          >
            <div className="mx-auto w-full max-w-7xl lg:px-8">
              <div className="relative px-4 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-2xl lg:max-w-5xl">
                  <div className="relative flex gap-4">
                    <div className="flex flex-1"></div>
                    <Navbar />
                    <ThemeToggle />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
