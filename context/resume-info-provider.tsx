"use client";

import useGetDocument from "@/features/document/use-get-document-by-id";
import { resumeData } from "@/lib/dummy";
import { ResumeDataType } from "@/types/resume.type";
import { useParams } from "next/navigation";
import { createContext, useState, FC, useEffect, useContext } from "react";

type ResumeContextType = {
  resumeInfo: ResumeDataType | undefined;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  refetch: () => void;
  onUpdate: (data: ResumeDataType) => void;
};

export const ResumeInfoContext = createContext<ResumeContextType | undefined>(
  undefined
);

export const ResumeInfoProvider: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const param = useParams();
  const documentId = param.documentId as string;

  const { data, isSuccess, isLoading, isError, refetch } =
    useGetDocument(documentId);

  const [resumeInfo, setResumeInfo] = useState<ResumeDataType>();

  useEffect(() => {
    if (isSuccess) setResumeInfo(data?.data);
  }, [isSuccess]);

  const onUpdate = (data: ResumeDataType) => {
    setResumeInfo(data);
  };

  return (
    <ResumeInfoContext.Provider
      value={{
        resumeInfo,
        isSuccess,
        isLoading,
        isError,
        refetch,
        onUpdate,
      }}
    >
      {children}
    </ResumeInfoContext.Provider>
  );
};

export const useResumeContext = () => {
  const context = useContext(ResumeInfoContext);
  if (!context) {
    throw new Error(
      "useCurrentUserContext must be used within a ResumeInfoProvider"
    );
  }
  return context;
};
