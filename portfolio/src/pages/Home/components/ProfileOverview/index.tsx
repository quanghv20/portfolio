import SubscribeForm from "./Form.tsx";
import WorkExperience from "./WorkExperience.tsx";
import { ArticleList } from "@/components/index.ts";

export default function ProfileOverview() {
  return (
    <>
      <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2 sm:gap-12s sm:gap-12 mt-8 sm:mt-12">
        <div className="flex flex-col gap-8">
          <WorkExperience />
          <SubscribeForm />
        </div>
        <div className="space-y-10 lg:pl-16 xl:pl-24">
          <ArticleList />
        </div>
      </div>
    </>
  );
}
