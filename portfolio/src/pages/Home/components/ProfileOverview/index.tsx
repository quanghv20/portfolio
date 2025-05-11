import SubscribeForm from "./Form.tsx";
import WorkExperience from "./WorkExperience.tsx";
import { ArticleList } from "@/components/index.ts";

export default function ProfileOverview() {
  return (
    <>
      <div className="sm:px-8 mt-8 sm:mt-12">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                <div className="flex flex-col gap-8 sm:gap-12">
                  <WorkExperience />
                  <SubscribeForm />
                </div>
                <div className="space-y-10 lg:pl-16 xl:pl-24">
                  {/* <ArticleList /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
