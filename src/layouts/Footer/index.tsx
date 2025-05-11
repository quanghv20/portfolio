import { Link, useLocation } from "react-router-dom";
import { navItems } from "@/constants/index.tsx";
import { Text } from "@/components/index.ts";

export default function Footer() {
  const location = useLocation();

  return (
    <>
      <footer className="mt-32 flex-none">
        <div className="sm:px-8">
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
              <div className="relative px-4 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-2xl lg:max-w-5xl">
                  <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                      {navItems?.map((item, index: number) => {
                        const isNavActive = location?.pathname === item?.href;

                        return (
                          <Link key={index} to={item?.href}>
                            <Text
                              className="sm:text-sm transition hover:text-teal-500 mx-1 dark:hover:text-teal-400"
                              highlighted={isNavActive}
                            >
                              {item?.label}
                            </Text>
                          </Link>
                        );
                      })}
                    </div>
                    <Text>© 2025 Quang Cối.</Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
