import { ArticleList, HeroHeading } from "@/components/index.ts";

export default function ArticlesPage() {
  return (
    <>
      <div className="sm:px-8 mt-16 sm:mt-32">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <header className="max-w-2xl">
                <HeroHeading
                  text={
                    "Writing on software design, company building, and the aerospace industry"
                  }
                />
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                  All of my long-form thoughts on programming, leadership,
                  product design, and more, collected in chronological order.
                </p>
              </header>
              <div className="mt-16 sm:mt-20">
                <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
                  <div className="flex max-w-3xl flex-col space-y-16">
                    <ArticleList />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
