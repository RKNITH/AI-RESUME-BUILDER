"use client";
import { InferRequestType, InferResponseType } from "hono";
import { api } from "@/lib/hono-rpc";
import { toast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type ResponseType = InferResponseType<
  typeof api.document.retore.archive.$patch
>;
type RequestType = InferRequestType<
  typeof api.document.retore.archive.$patch
>["json"];

const useRestoreDocument = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      const response = await api.document.retore.archive.$patch({
        json: json,
      });
      return await response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["trashDocuments"] });
      queryClient.invalidateQueries({ queryKey: ["documents"] });
      queryClient.invalidateQueries({ queryKey: ["document"] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to update document",
        variant: "destructive",
      });
    },
  });

  return mutation;
};

export default useRestoreDocument;
