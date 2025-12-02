/* eslint-disable @typescript-eslint/no-explicit-any */
import { generateImageWithSDXL } from "@/services/img-gen";
import { useMutation } from "@tanstack/react-query";

export const useGenIMGSDXL = () => {
  return useMutation<any, Error, any>({
    mutationKey: ["Gen_IMG"],
    mutationFn: async (prompt: string) => await generateImageWithSDXL(prompt),
    onSuccess: () => {
      window.location.href = "/dashboard";
      alert("Image Generated Successfully");
    },
    onError: (error: any) => {
      console.log(error);
    },
  });
};
