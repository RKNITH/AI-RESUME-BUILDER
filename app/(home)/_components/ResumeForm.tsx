"use client";
import React, { useState } from "react";
import { useResumeContext } from "@/context/resume-info-provider";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PersonalInfoForm from "./forms/PersonalInfoForm";
import SummaryForm from "./forms/SummaryForm";
import ExperienceForm from "./forms/ExperienceForm";
import EducationForm from "./forms/EducationForm";
import SkillsForm from "./forms/SkillsForm";

const ResumeForm = () => {
  const { resumeInfo } = useResumeContext();
  const [activeFormIndex, setActiveFormIndex] = useState(1);

  const handleNext = () => {
    const newIndex = activeFormIndex + 1;
    setActiveFormIndex(newIndex);
  };
  return (
    <div
      className="flex-1 w-full lg:sticky
  lg:top-16
  "
    >
      <div
        className="shadow-md rounded-md bg-white
      !border-t-primary !border-t-4 
      dark:bg-card dark:border
      dark:border-gray-800
      "
      >
        <div
          className="
        flex items-center gap-1
        px-3 justify-end
        border-b py-[7px] min-h-10
        "
        >
          {activeFormIndex > 1 && (
            <Button
              variant="outline"
              size="default"
              className="!px-2 !py-1 !h-auto"
              onClick={() => setActiveFormIndex(activeFormIndex - 1)}
            >
              <ArrowLeft size="16px" />
              Previous
            </Button>
          )}

          <Button
            variant="outline"
            size="default"
            className="!px-2 !py-1 !h-auto"
            disabled={
              activeFormIndex === 5 || resumeInfo?.status === "archived"
                ? true
                : false
            }
            onClick={handleNext}
          >
            Next
            <ArrowRight size="16px" />
          </Button>
        </div>
        <div className="px-5 py-3 pb-5">
          {/* {PersonalInfo Form} */}
          {activeFormIndex === 1 && (
            <PersonalInfoForm handleNext={handleNext} />
          )}

          {activeFormIndex === 2 && <SummaryForm handleNext={handleNext} />}

          {/* {Professional Exp.} */}
          {activeFormIndex === 3 && <ExperienceForm handleNext={handleNext} />}

          {/* {Eduncational Info} */}
          {activeFormIndex === 4 && <EducationForm handleNext={handleNext} />}

          {/* {Skills} */}
          {activeFormIndex === 5 && <SkillsForm />}
        </div>
      </div>
    </div>
  );
};

export default ResumeForm;
