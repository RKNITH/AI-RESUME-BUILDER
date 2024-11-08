import React from "react";
import { INITIAL_THEME_COLOR } from "@/lib/helper";
import { ResumeDataType } from "@/types/resume.type";
import { cn } from "@/lib/utils";
import PersonalInfo from "@/components/preview/PersonalInfo";
import SummaryPreview from "@/components/preview/SummaryPreview";
import EducationPreview from "@/components/preview/EducationPreview";
import ExperiencePreview from "@/components/preview/ExperiencePreview";
import SkillPreview from "@/components/preview/SkillPreview";

const PreviewResume = (props: {
  isLoading: boolean;
  resumeInfo: ResumeDataType;
}) => {
  const { isLoading, resumeInfo } = props;
  const themeColor = resumeInfo?.themeColor || INITIAL_THEME_COLOR;

  return (
    <div
      className={cn(`
        shadow-lg !bg-white w-full flex-[1.02]
        h-full p-10 !font-open-sans
        !text-black
        `)}
      style={{
        borderTop: `13px solid ${resumeInfo?.themeColor}`,
      }}
    >
      {/* {Personnal Info} */}
      <PersonalInfo isLoading={isLoading} resumeInfo={resumeInfo} />

      {/* {Summary} */}
      <SummaryPreview isLoading={isLoading} resumeInfo={resumeInfo} />

      {/* {Professional Exp} */}
      <ExperiencePreview isLoading={isLoading} resumeInfo={resumeInfo} />

      {/* {Educational Info} */}
      <EducationPreview isLoading={isLoading} resumeInfo={resumeInfo} />

      {/* {Skills} */}
      <SkillPreview isLoading={isLoading} resumeInfo={resumeInfo} />
    </div>
  );
};

export default PreviewResume;
