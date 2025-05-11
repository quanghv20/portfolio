import { useState } from "react";
import { Paragraph } from "@/components/index.ts";
import SubscribeForm from "./Form.tsx";
import WorkExperience from "./WorkExperience.tsx";

const timelineData = [
  {
    year: "2025 - Present",
    title:
      "Onsite at Viettel VMS – Optical Fiber Production Process Management",
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

const Timeline = () => {
  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700">
      {timelineData.map((item, index) => {
        const [showFull, setShowFull] = useState(false);

        return (
          <li className="mb-10 ms-4" key={index}>
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {item.year}
            </time>
            <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">
              {item.title}
            </h3>

            <ul className="list-disc pl-6">
              {item.content
                .slice(0, showFull ? item.content.length : 2)
                .map((text: string, i: number) => (
                  <li key={i}>
                    <Paragraph dangerouslySetInnerHTML={{ __html: text }} />
                  </li>
                ))}
            </ul>

            <button
              className="text-blue-500 mt-2"
              onClick={() => setShowFull(!showFull)}
            >
              {showFull ? "See Less" : "See More. . ."}
            </button>
          </li>
        );
      })}
    </ol>
  );
};

export default function ProfileOverview() {
  return (
    <>
      <div className="mx-auto grid max-w-xl grid-cols-1 lg:max-w-none lg:grid-cols-2 gap-x-20 gap-y-8 mt-8 sm:mt-12">
        <div className="flex flex-col gap-8">
          <WorkExperience />
          <SubscribeForm />
        </div>
        <div>
          <Timeline />
        </div>
      </div>
    </>
  );
}
