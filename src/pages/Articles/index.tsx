import {
  ArticleList,
  CodeBlock,
  HeroHeading,
  Paragraph,
} from "@/components/index.ts";
import FilterTags from "./components/FilterTags.tsx";

export default function ArticlesPage() {
  return (
    <>
      <header className="max-w-4xl">
        <HeroHeading text={"Code Your Future: Insights and Lessons"} />
        <Paragraph className="italic font-medium">
          Each line of code is a step closer to the future you're building.
        </Paragraph>
      </header>

      <FilterTags />

      <div>
        <div className="mt-8 mb-6">
          <h2 className="text-highlight mt-6 sm:text-2xl">PrismJS</h2>
        </div>
        <CodeBlock
          code={`const Prism = require('prismjs'); \nconst loadLanguages = require('prismjs/components/'); \nloadLanguages(['haml']); \n\n// Returns a highlighted HTML string \nconst html = Prism.highlight(code, Prism.languages.haml, 'haml');`}
          language="javascript"
        />
        <Paragraph>
          Aere repetiti cognataque natus. Habebat vela solutis saepe munus
          nondum adhuc oscula nomina pignora corpus deserat.
        </Paragraph>
      </div>
      <div className="mt-16 sm:mt-20">
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            <ArticleList />
          </div>
        </div>
      </div>
    </>
  );
}
