import { personalInfo } from "@/constants/index.tsx";
import { Link } from "react-router-dom";

export default function Avatar() {
  return (
    <>
      <div
        className="sm:px-8 top-0 order-last -mb-3 pt-3"
        // style="position:var(--header-position)"
      >
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div
                className="top-(--avatar-top,--spacing(3)) w-full"
                // style="position:var(--header-inner-position)"
              >
                <div className="relative">
                  <div
                    hidden
                    className="absolute top-3 left-0 origin-left transition-opacity h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:ring-white/10"
                    // style="opacity:var(--avatar-border-opacity, 0);transform:var(--avatar-border-transform)"
                  ></div>
                  <Link
                    aria-label="Home"
                    className="block h-16 w-16 origin-left pointer-events-auto"
                    // style="transform:var(--avatar-image-transform)"
                    to="/"
                  >
                    <img
                      alt=""
                      fetchPriority="high"
                      width="512"
                      height="512"
                      decoding="async"
                      data-nimg="1"
                      className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-16 w-16"
                      // style={{ color: "transparent" }}
                      sizes="4rem"
                      src={personalInfo?.avatarUrl}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
