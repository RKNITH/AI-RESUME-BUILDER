import React, { useCallback, useEffect } from "react";
import { Loader } from "lucide-react";
import { useResumeContext } from "@/context/resume-info-provider";
import { PersonalInfoType } from "@/types/resume.type";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import PersonalInfoSkeletonLoader from "@/components/skeleton-loader/personal-info-loader";
import { generateThumbnail } from "@/lib/helper";
import useUpdateDocument from "@/features/document/use-update-document";
import { toast } from "@/hooks/use-toast";

const initialState = {
  id: undefined,
  firstName: "",
  lastName: "",
  jobTitle: "",
  address: "",
  phone: "",
  email: "",
};

const PersonalInfoForm = (props: { handleNext: () => void }) => {
  const { handleNext } = props;
  const { resumeInfo, isLoading, onUpdate } = useResumeContext();
  const { mutateAsync, isPending } = useUpdateDocument();

  const [personalInfo, setPersonalInfo] =
    React.useState<PersonalInfoType>(initialState);

  useEffect(() => {
    if (!resumeInfo) {
      return;
    }
    if (resumeInfo?.personalInfo) {
      setPersonalInfo({
        ...(resumeInfo?.personalInfo || initialState),
      });
    }
  }, [resumeInfo?.personalInfo]);

  const handleChange = useCallback(
    (e: { target: { name: string; value: string } }) => {
      const { name, value } = e.target;

      setPersonalInfo({ ...personalInfo, [name]: value });

      if (!resumeInfo) return;

      onUpdate({
        ...resumeInfo,
        personalInfo: {
          ...resumeInfo.personalInfo,
          [name]: value,
        },
      });
    },
    [resumeInfo, onUpdate]
  );

  const handleSubmit = useCallback(
    async (e: { preventDefault: () => void }) => {
      e.preventDefault();

      const thumbnail = await generateThumbnail();
      const currentNo = resumeInfo?.currentPosition
        ? resumeInfo?.currentPosition + 1
        : 1;
      await mutateAsync(
        {
          currentPosition: currentNo,
          thumbnail: thumbnail,
          personalInfo: personalInfo,
        },
        {
          onSuccess: () => {
            toast({
              title: "Success",
              description: "PersonalInfo updated successfully",
            });
            handleNext();
          },
          onError: () => {
            toast({
              title: "Error",
              description: "Failed to update personal information",
              variant: "destructive",
            });
          },
        }
      );
    },
    [resumeInfo, personalInfo]
  );

  if (isLoading) {
    return <PersonalInfoSkeletonLoader />;
  }

  return (
    <div>
      <div className="w-full">
        <h2 className="font-bold text-lg">Personal Information</h2>
        <p className="text-sm">Get Started with the personal information</p>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div
            className="grid grid-cols-2 
          mt-5 gap-3"
          >
            <div>
              <Label className="text-sm">First Name</Label>
              <Input
                name="firstName"
                required
                autoComplete="off"
                placeholder=""
                value={personalInfo?.firstName || ""}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label className="text-sm">Last Name</Label>
              <Input
                name="lastName"
                required
                autoComplete="off"
                placeholder=""
                value={personalInfo?.lastName || ""}
                onChange={handleChange}
              />
            </div>
            <div className="col-span-2">
              <Label className="text-sm">Job Title</Label>
              <Input
                name="jobTitle"
                required
                autoComplete="off"
                placeholder=""
                value={personalInfo?.jobTitle || ""}
                onChange={handleChange}
              />
            </div>
            <div className="col-span-2">
              <Label className="text-sm">Address</Label>
              <Input
                name="address"
                required
                autoComplete="off"
                placeholder=""
                value={personalInfo?.address || ""}
                onChange={handleChange}
              />
            </div>
            <div className="col-span-2">
              <Label className="text-sm">Phone number</Label>
              <Input
                name="phone"
                required
                autoComplete="off"
                placeholder=""
                value={personalInfo?.phone || ""}
                onChange={handleChange}
              />
            </div>
            <div className="col-span-2">
              <Label className="text-sm">Email</Label>
              <Input
                name="email"
                required
                autoComplete="off"
                placeholder=""
                value={personalInfo?.email || ""}
                onChange={handleChange}
              />
            </div>
          </div>

          <Button
            className="mt-4"
            type="submit"
            disabled={
              isPending || resumeInfo?.status === "archived" ? true : false
            }
          >
            {isPending && <Loader size="15px" className="animate-spin" />}
            Save Changes
          </Button>
        </form>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
