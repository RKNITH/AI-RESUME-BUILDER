import React, { useCallback, useEffect, useState } from "react";
import { useResumeContext } from "@/context/resume-info-provider";
import useUpdateDocument from "@/features/document/use-update-document";
import { INITIAL_THEME_COLOR } from "@/constant/colors";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Palette, ChevronDown } from "lucide-react";
import { generateThumbnail } from "@/lib/helper";
import { toast } from "@/hooks/use-toast";
import useDebounce from "@/hooks/use-debounce";

const ThemeColor = () => {
  const colors = [
    "#FF6F61", // Warm Coral
    "#33B679", // Fresh Green
    "#4B9CD3", // Soft Blue
    "#FF6F91", // Bright Magenta
    "#9B59B6", // Rich Purple
    "#1ABC9C", // Mint Green
    "#FF8C00", // Tangerine Orange
    "#B2D300", // Vibrant Lime
    "#8E44AD", // Deep Violet
    "#FF4F81", // Hot Pink
    "#2ECC71", // Light Jade
    "#3498DB", // Calm Sky Blue
    "#A3D550", // Neon Yellow-Green
    "#00BFFF", // Cool Azure
    "#FF6F61", // Coral Orange
    "#8E44AD", // Royal Blue
    "#2ECC71", // Electric Green
    "#5B2C6F", // Indigo Purple
    "#FF4F81", // Crimson Red
    "#2980B9", // Cobalt Blue
  ];

  const { resumeInfo, onUpdate } = useResumeContext();
  const { mutateAsync } = useUpdateDocument();

  const [selectedColor, setSelectedColor] = useState(INITIAL_THEME_COLOR);

  const debouncedColor = useDebounce<string>(selectedColor, 1000);

  useEffect(() => {
    if (debouncedColor) onSave();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedColor]);

  const onColorSelect = useCallback(
    (color: string) => {
      setSelectedColor(color);

      if (!resumeInfo) return;
      onUpdate({
        ...resumeInfo,
        themeColor: color,
      });
    },
    [resumeInfo, onUpdate]
  );

  const onSave = useCallback(async () => {
    if (!selectedColor) return;
    if (selectedColor === INITIAL_THEME_COLOR) return;
    const thumbnail = await generateThumbnail();

    await mutateAsync(
      {
        themeColor: selectedColor,
        thumbnail: thumbnail,
      },
      {
        onSuccess: () => {
          toast({
            title: "Success",
            description: "Theme updated successfully",
          });
        },
        onError() {
          toast({
            title: "Error",
            description: "Failed to update theme",
            variant: "destructive",
          });
        },
      }
    );
  }, [selectedColor]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          disabled={resumeInfo?.status === "archived" ? true : false}
          variant="secondary"
          className="bg-white border gap-1
                   dark:bg-gray-800 !p-2
                    lg:w-auto lg:p-4"
        >
          <div className="flex items-center gap-1">
            <Palette size="17px" />
            <span className="hidden lg:flex">Theme</span>
          </div>
          <ChevronDown size="14px" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="
          bg-background
          "
      >
        <h2
          className="mb-2 
                text-sm font-bold"
        >
          Select Theme Color
        </h2>

        <div className="grid grid-cols-5 gap-3">
          {colors.map((item: string, index: number) => (
            <div
              role="button"
              key={index}
              onClick={() => onColorSelect(item)}
              className={`h-5 w-8 rounded-[5px]
                            hover:border-black border

                          ${selectedColor === item && "border border-black"}
                            `}
              style={{
                background: item,
              }}
            />
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ThemeColor;
