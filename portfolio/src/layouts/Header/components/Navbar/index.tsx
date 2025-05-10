export default function Navbar() {
  const navItems = [
    { label: "About", href: "/about", active: true },
    { label: "Articles", href: "/articles" },
    { label: "Projects", href: "/projects" },
    { label: "Speaking", href: "/speaking" },
    { label: "Uses", href: "/uses" },
  ];

  return (
    <div className="flex flex-1 justify-end md:justify-center">
      <div className="pointer-events-auto md:hidden" data-headlessui-state="">
        <button
          className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
          type="button"
          aria-expanded="false"
          data-headlessui-state=""
          id="headlessui-popover-button-:Rbmiqja:"
        >
          Menu
          <svg
            viewBox="0 0 8 6"
            aria-hidden="true"
            className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
          >
            <path
              d="M1.75 1.75 4 4.25l2.25-2.5"
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
      </div>
      <div
      // hidden=""
      // style="position:fixed;top:1px;left:1px;width:1px;height:0;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0;display:none"
      ></div>
      <nav className="pointer-events-auto hidden md:block">
        <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400 ${
                  item.active ? "text-teal-500 dark:text-teal-400" : ""
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
