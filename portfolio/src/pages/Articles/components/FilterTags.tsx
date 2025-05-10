import { useState } from "react";
import { tags } from "@/constants/index.tsx";
import FilterMenu from "./FilterMenu.tsx";

export default function FilterTags() {
  const [activeTag, setActiveTag] = useState<string>("Latest");
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  const handleToggleMenu = () => setIsFilterMenuOpen((prev) => !prev);

  const handleChangeTag = (tag: string) => {
    setActiveTag(tag);
  };

  return (
    <>
      <div
        className="relative mt-6 pointer-events-auto sm:hidden"
        data-headlessui-state=""
      >
        <button
          className="cursor-pointer group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
          type="button"
          aria-expanded="false"
          data-headlessui-state=""
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          onClick={handleToggleMenu}
        >
          {activeTag}
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

        <FilterMenu
          isOpen={isFilterMenuOpen}
          activeTag={activeTag}
          changeTag={handleChangeTag}
          closeMenu={handleToggleMenu}
        />
      </div>

      <div className="mt-4 hidden sm:block">
        {/* {tags.map((tag) => {
          return (
            <span
              key={tag?.label}
              onClick={() => handleChangeTag(tag?.label)}
              className={`${
                activeTag === tag?.label
                  ? `border-2 border-${tag?.color}-500 tag-active`
                  : "border-2 border-transparent tag-custom"
              } bg-${tag?.color}-100 text-${
                tag?.color
              }-800  text-base font-medium me-4 px-4 py-2 rounded-lg dark:bg-${
                tag?.color
              }-900 dark:text-${
                tag?.color
              }-300 cursor-pointer mt-6`}
            >
              {tag?.label}
            </span>
          );
        })} */}
        <div className="mt-4 hidden sm:block">
          <span
            onClick={() => handleChangeTag("Latest")}
            className={`${
              activeTag === "Latest"
                ? "border-2 border-green-500 tag-active"
                : "border-2 border-transparent tag-custom"
            } bg-green-100 text-green-800 text-base font-medium me-4 px-4 py-2 rounded-lg dark:bg-green-900 dark:text-green-300 cursor-pointer mt-6`}
          >
            Latest
          </span>
          <span
            onClick={() => handleChangeTag("Most Popular")}
            className={`${
              activeTag === "Most Popular"
                ? "border-2 border-red-500 tag-active"
                : "border-2 border-transparent tag-custom"
            } bg-red-100 text-red-800 text-base font-medium me-4 px-4 py-2 rounded-lg dark:bg-red-900 dark:text-red-300 cursor-pointer mt-6`}
          >
            Most Popular
          </span>
          <span
            onClick={() => handleChangeTag("HTML/CSS")}
            className={`${
              activeTag === "HTML/CSS"
                ? "border-2 border-indigo-500 tag-active"
                : "border-2 border-transparent tag-custom"
            } bg-indigo-100 text-indigo-800 text-base font-medium me-4 px-4 py-2 rounded-lg dark:bg-indigo-900 dark:text-indigo-300 cursor-pointer mt-6`}
          >
            HTML/CSS
          </span>
          <span
            onClick={() => handleChangeTag("Javascript")}
            className={`${
              activeTag === "Javascript"
                ? "border-2 border-yellow-500 tag-active"
                : "border-2 border-transparent tag-custom"
            } bg-yellow-100 text-yellow-800 text-base font-medium me-4 px-4 py-2 rounded-lg dark:bg-yellow-900 dark:text-yellow-300 cursor-pointer mt-6`}
          >
            Javascript
          </span>
          <span
            onClick={() => handleChangeTag("ReactJS")}
            className={`${
              activeTag === "ReactJS"
                ? "border-2 border-blue-500 tag-active"
                : "border-2 border-transparent tag-custom"
            } bg-blue-100 text-blue-800 text-base font-medium me-4 px-4 py-2 rounded-lg dark:bg-blue-900 dark:text-blue-300 cursor-pointer mt-6`}
          >
            ReactJS
          </span>
          <span
            onClick={() => handleChangeTag("NodeJS")}
            className={`${
              activeTag === "NodeJS"
                ? "border-2 border-pink-500 tag-active"
                : "border-2 border-transparent tag-custom"
            } bg-pink-100 text-pink-800 text-base font-medium me-4 px-4 py-2 rounded-lg dark:bg-pink-900 dark:text-pink-300 cursor-pointer mt-6`}
          >
            NodeJS
          </span>
        </div>
      </div>
    </>
  );
}
