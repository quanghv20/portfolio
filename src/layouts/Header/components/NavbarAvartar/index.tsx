import { personalInfo } from "@/constants/index.tsx";
import { Link } from "react-router-dom";

export default function NavbarAvatar() {
  return (
    <>
      <div className="flex flex-1">
        <div className="h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:ring-white/10">
          <Link aria-label="Home" className="pointer-events-auto" to={"/"}>
            <img
              alt=""
              fetchPriority="high"
              width="512"
              height="512"
              decoding="async"
              data-nimg="1"
              className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-9 w-9"
              sizes="2.25rem"
              src={personalInfo?.avatarUrl}
              //   style="color: transparent;"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
