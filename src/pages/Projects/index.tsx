import {
  HeroHeading,
  Paragraph,
  Text,
  TextSubHeading,
} from "@/components/index.ts";

const projects = [
  {
    name: "Comming Soon",
    description: "Something exciting is on the way. Stay tuned!",
    link: "#",
    image:
      "https://upload.wikimedia.org/wikipedia/vi/thumb/9/91/FC_Barcelona_logo.svg/1200px-FC_Barcelona_logo.svg.png",
    site: "github.com",
  },
  {
    name: "Coming Soons",
    description: "Something exciting is on the way. Stay tuned!",
    link: "#",
    image:
      "https://upload.wikimedia.org/wikipedia/vi/thumb/a/a1/Man_Utd_FC_.svg/2021px-Man_Utd_FC_.svg.png",
    site: "github.com",
  },
  {
    name: "Coming Soon",
    description: "Something exciting is on the way. Stay tuned!",
    link: "#",
    image:
      "https://upload.wikimedia.org/wikipedia/vi/thumb/1/1d/Manchester_City_FC_logo.svg/1200px-Manchester_City_FC_logo.svg.png",
    site: "github.com",
  },
  {
    name: "Coming Soon",
    description: "Something exciting is on the way. Stay tuned!",
    link: "#",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/FC_Internazionale_Milano_2021.svg/640px-FC_Internazionale_Milano_2021.svg.png",
    site: "github.com",
  },
  {
    name: "Coming Soon",
    description: "Something exciting is on the way. Stay tuned!",
    link: "#",
    image:
      "https://upload.wikimedia.org/wikipedia/vi/thumb/a/a7/Paris_Saint-Germain_F.C..svg/1024px-Paris_Saint-Germain_F.C..svg.png",
    site: "github.com",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <header className="max-w-3xl">
        <HeroHeading text="Designing the future, one idea at a time. Nothing is impossible." />
        <Paragraph>
          Over the years, I have worked on many personal projects. Although they
          are not large, each project has helped me improve and develop my
          skills.
        </Paragraph>
      </header>
      <div className="mt-10 sm:mt-15">
        <ul
          role="list"
          className="grid grid-cols-1 gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects?.map((item, index: number) => {
            return (
              <li
                key={index}
                className="group relative flex flex-col items-start cursor-pointer p-4 border border-zinc-200 rounded-xl transition-all duration-200 hover:scale-[1.02] hover:border-teal-500"
              >
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                  <img
                    alt=""
                    loading="lazy"
                    className="h-10 w-10"
                    width={32}
                    height={32}
                    decoding="async"
                    data-nimg={1}
                    src={item?.image}
                  />
                </div>
                <TextSubHeading className="mt-6 transition group-hover:text-teal-500 dark:text-zinc-200">
                  {item?.name}
                </TextSubHeading>
                <Text className="mt-2 transition group-hover:text-teal-500 dark:text-zinc-200">
                  {item?.description}
                </Text>
                <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-6 w-6 flex-none"
                  >
                    <path
                      d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
                      fill="currentColor"
                    />
                  </svg>
                  <TextSubHeading className="ml-2 transition group-hover:text-teal-500 dark:text-zinc-200">
                    {item?.site}
                  </TextSubHeading>
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
