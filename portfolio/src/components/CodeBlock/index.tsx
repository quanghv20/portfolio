import { useEffect } from "react";
import Prism from "prismjs";

type PropsType = {
  code: string;
  language: string;
};

const CodeBlock = ({ code, language = "javascript" }: PropsType) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <pre className="rounded-lg bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
      <code className={`language-${language}`}>{code}</code>
    </pre>
  );
};

export default CodeBlock;
