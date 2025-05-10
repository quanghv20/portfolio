import { useLocation } from "react-router-dom";
import ThemeToggle from "./components/ThemeToggle/index.tsx";
import Navbar from "./components/Navbar/index.tsx";
import Avatar from "./components/Avatar/index.tsx";
import NavbarAvatar from "./components/NavbarAvartar/index.tsx";

export default function Header() {
  const location = useLocation();

  return (
    <>
      <header className="pointer-events-none relative z-50 flex flex-none flex-col">
        {location.pathname === "/" && (
          <>
            <div className="order-last mt-[calc(--spacing(16)-(--spacing(3)))]"></div>
            <Avatar />
          </>
        )}

        <div className="top-0 z-10 h-16 pt-6">
          <div className="sm:px-8 top-(--header-top,--spacing(6)) w-full">
            <div className="mx-auto w-full max-w-7xl lg:px-8">
              <div className="relative px-4 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-2xl lg:max-w-5xl">
                  <div className="relative flex gap-4">
                    <div className="flex flex-1">
                      {location.pathname !== "/" && <NavbarAvatar />}
                    </div>
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
