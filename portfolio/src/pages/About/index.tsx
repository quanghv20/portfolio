import { HeroHeading } from "@/components/index.ts";
import { personalInfo } from "@/constants/index.tsx";

export default function AboutPage() {
  return (
    <>
      <div className="sm:px-8 mt-16 sm:mt-32">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                <div className="lg:pl-20 m-auto">
                  <div className="max-w-xs px-2.5 lg:max-w-none">
                    <img
                      alt=""
                      loading="lazy"
                      width="800"
                      height="800"
                      decoding="async"
                      data-nimg="1"
                      className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                      sizes="(min-width: 1024px) 32rem, 20rem"
                      src={personalInfo?.about?.imgUrl}
                      // style="color: transparent;"
                    />
                  </div>
                </div>
                <div className="lg:order-first lg:row-span-2">
                  <HeroHeading text={personalInfo?.about?.introTitle} />
                  <div className="mt-4 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                    <i>
                      <b>Designing the future, one idea at a time.</b>
                    </i>
                    <p className="mt-2">
                      <i>
                        <b>Nothing is impossible</b>
                      </i>{" "}
                      when you’re driven by curiosity, creativity, and purpose.
                    </p>
                  </div>
                  <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                    {personalInfo?.about?.introDesc?.map(
                      (item, index: number) => {
                        return <p key={index}>{item}</p>;
                      }
                    )}
                  </div>
                  <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400s">
                    <p className="mb-6">
                      Let’s puild something amazing together.
                    </p>
                    <b>
                      <i>Thanks for reading!</i>
                    </b>
                  </div>
                </div>
                <div className="lg:pl-20 m-auto">
                  <ul role="list">
                    {personalInfo?.socialLinks?.map((item, index: number) => {
                      return (
                        <li
                          key={index}
                          className={`flex ${index !== 0 ? "mt-4" : ""}`}
                        >
                          <a
                            className="group flex items-center text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                            href={item?.link}
                            target="_blank"
                          >
                            {item?.icon}
                            <span className="ml-4">Follow on {item?.name}</span>
                          </a>
                        </li>
                      );
                    })}
                    <li className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40 flex">
                      <a
                        className="group flex items-center text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                        href="mailto:quanghv20@gmail.com"
                        target="_blank"
                      >
                        <svg
                          className="w-6 h-6 text-gray-800 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-width="2"
                            d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
                          />
                        </svg>
                        <span className="ml-4">quanghv20@gmail.com</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
