import { tags } from "@/constants/index.tsx";

type PropsType = {
  isOpen: boolean;
  activeTag: string;
  changeTag: (tag: string) => void;
  closeMenu: () => void;
};

export default function FilterMenu(props: PropsType) {
  const { isOpen, activeTag, changeTag, closeMenu } = props;

  if (!isOpen) return null;

  return (
    <>
      <div
        id="dropdown"
        className={`${
          !isOpen && "hidden"
        } absolute top-12 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          {tags.map((tag, index: number) => {
            const isActive = tag.label === activeTag;

            return (
              <li
                key={index}
                className="cursor-pointer"
                onClick={() => {
                  changeTag(tag?.label);
                  closeMenu();
                }}
              >
                <span
                  className={`relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400 ${
                    isActive ? "font-bold text-teal-500 dark:text-teal-400" : ""
                  }`}
                >
                  {tag?.label}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
