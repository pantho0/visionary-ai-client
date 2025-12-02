/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import axiosInstance from "@/lib/AxiosInstance";

export const generateImageWithSDXL = async (prompt: string) => {
  console.log(prompt);
  try {
    const res = await axiosInstance.post("/gen-img/sdxl", { prompt });
    if (!res.data.success) {
      throw new Error(res.data.message || "Error generating image");
    }
    return res.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || error.message || "Error generating image"
    );
  }
};
