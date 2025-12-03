/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  generateImageWithFlux1snell,
  generateImageWithSDXL,
  getAllGenImages,
} from "@/services/img-gen";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGenIMGSDXL = () => {
  const queryClient = useQueryClient();
  return useMutation<any, Error, any>({
    mutationKey: ["Gen_IMG"],
    mutationFn: async (prompt: string) => await generateImageWithSDXL(prompt),
    onSuccess: () => {
      // Invalidate the cached invoice list so it refetches
      queryClient.invalidateQueries({ queryKey: ["Get_All_Gen_Images"] });
    },
  });
};
export const useGenIMGFlux1snell = () => {
  const queryClient = useQueryClient();
  return useMutation<any, Error, any>({
    mutationKey: ["Gen_IMG"],
    mutationFn: async (prompt: string) =>
      await generateImageWithFlux1snell(prompt),
    onSuccess: () => {
      // Invalidate the cached invoice list so it refetches
      queryClient.invalidateQueries({ queryKey: ["Get_All_Gen_Images"] });
    },
  });
};

export const useGetAllGenImages = () => {
  return useQuery<any, Error>({
    queryKey: ["Get_All_Gen_Images"],
    queryFn: async () => await getAllGenImages(),
  });
};
