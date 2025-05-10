import { personalInfo } from "@/constants/index.tsx";

export default function HeroSection() {
  return (
    <>
      <div className="sm:px-8 mt-9">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                  {personalInfo?.titles?.mainTitle}
                </h1>
                <h2 className="mt-4 text-4xl font-bold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
                  {personalInfo?.titles?.subTitle}
                </h2>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                  {personalInfo?.shortDescription}
                </p>
                <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
                  {personalInfo?.longDescription}
                </p>
                <div className="mt-6 flex gap-6">
                  {personalInfo?.socialLinks?.map((item, index: number) => {
                    return (
                      <a
                        key={index}
                        className="group -m-1 p-1"
                        aria-label="Follow on X"
                        href={item.link}
                        target="_blank"
                      >
                        {item.icon}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
