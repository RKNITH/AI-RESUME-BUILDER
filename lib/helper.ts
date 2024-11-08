import { v4 as uuidv4 } from "uuid";
import html2canvas from "html2canvas";

export const INITIAL_THEME_COLOR = "#7c3aed";

export const generateDocUUID = (): string => {
  const uuid = uuidv4().replace(/-/g, "");
  return `doc-${uuid.substring(0, 16)}`;
};

export const generateThumbnail = async () => {
  const resumeElement = document.getElementById(
    "resume-preview-id"
  ) as HTMLElement;
  if (!resumeElement) {
    console.error("Resume preview element not found");
    return;
  }

  try {
    const canvas = await html2canvas(resumeElement, { scale: 0.5 });
    const thumbnailImage = canvas.toDataURL("image/png");
    return thumbnailImage;
  } catch (error) {
    console.error("Thumbnail generation failed", error);
  }
};

export const formatFileName = (title: string, useHyphen: boolean = true) => {
  const delimiter = useHyphen ? "-" : "_";
  return title.trim().replace(/\s+/g, delimiter) + "pdf";
};
