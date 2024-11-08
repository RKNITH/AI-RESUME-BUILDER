import React from "react";
import TopSection from "./common/TopSection";
import ResumeForm from "./ResumeForm";
import ResumePreview from "./ResumePreview";

const EditResume = () => {
  return (
    <div className="relative w-full">
      <div
        className="w-full mx-auto max-w-7xl
       py-4 px-5"
      >
        <TopSection />
        <div className="w-full mt-1">
          <div
            className="flex flex-col lg:flex-row
                  items-start w-full py-3 gap-6
                  
                  "
          >
            {/* {Form Section} */}
            <ResumeForm />
            {/* {Preview Section} */}
            <ResumePreview />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditResume;
