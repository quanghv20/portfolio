import { personalInfo } from "@/constants/index.tsx";

export default function AboutPage() {
  return (
    <>
      <div className="sm:px-8 mt-16 sm:mt-32">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                <div className="lg:pl-20">
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
                  <h1 className="leading-snug text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                    {personalInfo?.about?.introTitle}
                  </h1>
                  <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                    {personalInfo?.about?.introDesc?.map(
                      (item, index: number) => {
                        return <p key={index}>{item}</p>;
                      }
                    )}
                  </div>
                </div>
                <div className="lg:pl-20">
                  <ul role="list">
                    {personalInfo?.socialLinks?.map((item, index: number) => {
                      return (
                        <li
                          key={index}
                          className={`flex ${index !== 0 ? "mt-4" : ""}`}
                        >
                          <a
                            className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                            href={item?.link}
                          >
                            {item?.icon}
                            <span className="ml-4">Follow on {item?.name}</span>
                          </a>
                        </li>
                      );
                    })}
                    <li className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40 flex">
                      <a
                        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                        href="mailto:spencer@planetaria.tech"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
                          ></path>
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
