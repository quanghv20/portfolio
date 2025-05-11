import React from "react";

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export default function Text({
  className = "",
  children,
  ...props
}: TextProps) {
  const baseClass =
    "text-sm sm:text-base leading-normal text-zinc-600 dark:text-zinc-400";
  const combinedClassName = `${baseClass} ${className}`.trim();

  return (
    <span className={combinedClassName} {...props}>
      {children}
    </span>
  );
}
