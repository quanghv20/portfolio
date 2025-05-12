import SubscribeForm from "./Form.tsx";
import WorkExperience from "./WorkExperience.tsx";
import Timeline from "./Timeline.tsx";
import TechnicalSkills from "./TechnicalSkills.tsx";

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
      <TechnicalSkills />
    </>
  );
}
