import React, { FC, useCallback, useMemo } from "react";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import { Dot, EllipsisVertical, FileText, Globe, Lock } from "lucide-react";
import Image from "next/image";

interface PropType {
  documentId: string;
  title: string;
  status: "archived" | "private" | "public";
  themeColor: string | null;
  thumbnail: string | null;
  updatedAt: string;
}

const ResumeItem: FC<PropType> = ({
  documentId,
  status,
  title,
  themeColor,
  thumbnail,
  updatedAt,
}) => {
  const router = useRouter();

  const docDate = useMemo(() => {
    if (!updatedAt) return null;
    const formattedDate = format(updatedAt, "MMM dd,yyyy");
    return formattedDate;
  }, [updatedAt]);

  const gotoDoc = useCallback(() => {
    router.push(`/dashboard/document/${documentId}/edit`);
  }, [router, documentId]);

  return (
    <div
      role="button"
      className="
        cursor-pointer max-w-[164px] w-full
        border 
        rounded-lg transition-all h-[197px]
        hover:border-primary
        hover:shadow-md
        shadow-primary
        "
      onClick={gotoDoc}
      style={{ borderColor: themeColor || "" }}
    >
      <div
        className="flex flex-col w-full 
          h-full items-center rounded-lg
          justify-center bg-[#fdfdfd] 
          dark:bg-secondary"
      >
        <div
          className="w-full flex flex-1 px-1
         pt-2"
        >
          <div
            className="w-full flex flex-1 bg-white
          dark:bg-gray-700
          rounded-t-lg justify-center
           items-center
          "
          >
            {thumbnail ? (
              <div
                className="
              relative w-full h-full 
              rounded-t-lg
              overflow-hidden
              "
              >
                <Image
                  fill
                  src={thumbnail}
                  alt={title}
                  className="w-full h-full
                  object-cover
                  object-top rounded-t-lg
                                  "
                />
              </div>
            ) : (
              <FileText size="30px" />
            )}
          </div>
        </div>

        {/* {Body Content} */}
        <div
          className="shrink w-full border-t pt-2 
              pb-[9px]
              px-[9px]
        "
        >
          <div
            className="flex items-center 
          justify-between"
          >
            <h5
              className="
                      font-semibold text-sm mb-[2px]
                      truncate block w-[200px]
                      "
            >
              {title}
            </h5>
            <button className="text-muted-foreground">
              <EllipsisVertical size="20px" />
            </button>
          </div>
          <div
            className="flex items-center
          !text-[12px] font-medium 
          text-muted-foreground
          "
          >
            <span
              className="
                      flex items-center gap-[2px]
                      "
            >
              {status === "private" ? (
                <>
                  <Lock size="12px" />
                  Private
                </>
              ) : (
                <>
                  <Globe size="12px" className="text-primary" />
                  Public
                </>
              )}
            </span>
            <Dot size="15px" />
            <span>{docDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeItem;
