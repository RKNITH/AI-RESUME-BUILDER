"use client";

import { api } from "@/lib/hono-rpc";
import { useQuery } from "@tanstack/react-query";

const useGetDocuments = (isTrash: boolean = false) => {
  const queryKey = isTrash ? ["trashDocuments"] : ["documents"];
  const query = useQuery({
    queryKey,
    queryFn: async () => {
      const endpoint = isTrash ? api.document.trash.all : api.document.all;
      const response = await endpoint.$get();

      if (!response.ok) {
        throw new Error("Failed to get documents");
      }

      const { data, success } = await response.json();
      return { data, success };
    },
  });
  return query;
};

export default useGetDocuments;
