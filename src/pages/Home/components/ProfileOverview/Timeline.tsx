import { useState } from "react";
import { Paragraph, Text, TextSubHeading } from "@/components/index.ts";

const timelineData = [
  {
    year: "2025 - Present",
    title:
      "Onsite at Viettel VMC – Optical Fiber Production Process Management",
    content: [
      "Participated in developing a <b>production process management system for optical fiber</b>, optimizing the production of components and devices for Viettel.",
      "Used <b>ReactJS</b> combined with <b>Ant Design</b> and <b>TailwindCSS</b> to build a user-friendly interface for managers and operators.",
      "Applied <b>Redux Toolkit</b> and <b>Redux Persist</b> to manage app state efficiently, ensuring continuous data storage and retrieval, especially in complex production processes.",
      "Designed and implemented <b>common components</b> to optimize code reusability throughout the system.",
      "Developed <b>role-based access control (RBAC)</b> to ensure security and appropriate access rights according to job roles.",
      "Optimized data input/output processes and handled large production data, including detailed information on production processes, timelines, completion rates, and material usage.",
      "Collaborated with other teams to ensure smooth operation, scalability, and effective data analysis for management reports.",
    ],
  },
  {
    year: "2024 - 2025",
    title: "Onsite at VOV Digital Newspaper",
    content: [
      "Participated in building <b>admin dashboards</b> outside the main digital newspaper system for retrieving and analyzing content data.",
      "Used <b>ReactJS + NodeJS</b> to develop dashboards displaying real-time access statistics, page views, traffic sources, and user behavior.",
      "Designed intuitive interfaces with charts and data tables capable of filtering by time, category, and keywords.",
      "Managed state effectively with Redux, especially in handling large datasets and multiple interactions.",
      "Applied lazy loading, memoization, and code splitting to optimize system performance.",
    ],
  },
  {
    year: "2023 - 2024",
    title: "Accounting Web Project for MJS Company – Japan",
    content: [
      "Participated in the development of an accounting system serving the Japanese market, ensuring strict compliance with business standards and software quality.",
      "Used <b>ReactJS</b>, developing based on components provided by the client to ensure system stability and scalability.",
      "Collaborated closely with BrSE, QA, and backend developers to implement accurate data flow and maintain the codebase following Agile/Scrum processes.",
    ],
  },
];

export default function Timeline() {
  return (
    <ol className="relative border-s border-gray-300 dark:border-gray-700">
      {timelineData.map((item, index) => {
        const [showFull, setShowFull] = useState(false);
        const [isCollapsed, setIsCollapsed] = useState(false);

        return (
          <li className="mb-10 ms-4" key={index}>
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
            <div className="flex justify-between items-center">
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                <Text className="font-medium">{item.year}</Text>
              </time>

              <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="text-gray-500 dark:text-gray-400"
              >
                {isCollapsed ? (
                  <svg
                    className="w-4 h-4 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 9-7 7-7-7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m5 15 7-7 7 7"
                    />
                  </svg>
                )}
              </button>
            </div>
            <TextSubHeading>{item.title}</TextSubHeading>
            <div
              className={`transition-all ${isCollapsed ? "max-h-0 overflow-hidden" : "max-h-screen"
                }`}
            >
              <ul className="list-disc pl-6 text-zinc-500 dark:text-zinc-400 text-sm">
                {item.content
                  .slice(0, showFull ? item.content.length : 2)
                  .map((text: string, i: number) => (
                    <li key={i}>
                      <Paragraph dangerouslySetInnerHTML={{ __html: text }} className="sm:text-sm" />
                    </li>
                  ))}
              </ul>

              <button
                className="text-blue-500 mt-4 ml-2"
                onClick={() => setShowFull(!showFull)}
              >
                <Text highlighted className="font-normal sm:text-sm">
                  {showFull ? "See Less" : "See More. . ."}
                </Text>
              </button>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
