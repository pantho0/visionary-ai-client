/* eslint-disable @typescript-eslint/no-explicit-any */
import { generateImageWithSDXL, getAllGenImages } from "@/services/img-gen";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGenIMGSDXL = () => {
  return useMutation<any, Error, any>({
    mutationKey: ["Gen_IMG"],
    mutationFn: async (prompt: string) => await generateImageWithSDXL(prompt),
    onSuccess: () => {
      alert("Image Generated Successfully");
    },
    onError: (error: any) => {
      console.log(error);
    },
  });
};

export const useGetAllGenImages = () => {
  return useQuery<any, Error>({
    queryKey: ["Get_All_Gen_Images"],
    queryFn: async () => await getAllGenImages(),
  });
};
