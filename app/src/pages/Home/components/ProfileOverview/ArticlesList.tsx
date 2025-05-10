import React from "react";

const articles = [
  {
    title: "Crafting a design system for a multiplanetary future",
    href: "/articles/crafting-a-design-system-for-a-multiplanetary-future",
    dateTime: "2022-09-05",
    dateLabel: "September 5, 2022",
    description:
      "Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.",
  },
  {
    title: "Introducing Animaginary: High performance web animations",
    href: "/articles/introducing-animaginary",
    dateTime: "2022-09-02",
    dateLabel: "September 2, 2022",
    description:
      "When you’re building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself.",
  },
  {
    title: "Rewriting the cosmOS kernel in Rust",
    href: "/articles/rewriting-the-cosmos-kernel-in-rust",
    dateTime: "2022-07-14",
    dateLabel: "July 14, 2022",
    description:
      "When we released the first version of cosmOS last year, it was written in Go. Go is a wonderful programming language, but it’s been a while since I’ve seen an article on the front page of Hacker News about rewriting some important tool in Go and I see articles on there about rewriting things in Rust every single week.",
  },
];

export default function ArticlesList() {
  return (
    <>
      <div className="flex flex-col gap-16">
        {articles.map((article, index: number) => {
          return (
            <article
              key={index}
              className="group relative flex flex-col items-start"
            >
              <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
                <a href={article.href}>
                  <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                  <span className="relative z-10">{article.title}</span>
                </a>
              </h2>
              <time
                className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"
                dateTime={article.dateTime}
              >
                <span
                  className="absolute inset-y-0 left-0 flex items-center"
                  aria-hidden="true"
                >
                  <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                </span>
                {article.dateLabel}
              </time>
              <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {article.description}
              </p>
              <div
                aria-hidden="true"
                className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
              >
                Read article
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  className="ml-1 h-4 w-4 stroke-current"
                >
                  <path
                    d="M6.75 5.75 9.25 8l-2.5 2.25"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
