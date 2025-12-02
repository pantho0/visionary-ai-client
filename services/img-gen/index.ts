/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import axiosInstance from "@/lib/AxiosInstance";

export const generateImageWithSDXL = async (prompt: string) => {
  try {
    const res = await axiosInstance.post("/gen-img/flux1snell", { prompt });
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

export const getAllGenImages = async () => {
  try {
    const data = await fetch(`${process.env.BACKEND_URL}/gen-img`);
    const res = await data.json();
    return res;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || error.message || "Error generating image"
    );
  }
};
