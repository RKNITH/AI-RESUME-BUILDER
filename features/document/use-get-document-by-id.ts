"use client";

import { api } from "@/lib/hono-rpc";
import { useQuery } from "@tanstack/react-query";

const useGetDocument = (documentId: string, isPublic: boolean = false) => {
  const query = useQuery({
    queryKey: ["document", documentId],
    queryFn: async () => {
      const endpoint = !isPublic
        ? api.document[":documentId"]
        : api.document.public.doc[":documentId"];

      const response = await endpoint.$get({
        param: {
          documentId: documentId,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to get document");
      }

      const { data, success } = await response.json();
      return {
        data,
        success,
      };
    },
    retry: isPublic ? false : 3,
    //enabled: false,
  });

  return query;
};

export default useGetDocument;
