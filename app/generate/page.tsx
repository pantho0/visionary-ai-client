/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  useGenIMGFlux1snell,
  useGenIMGSDXL,
  useGetAllGenImages,
} from "@/hooks/genImage.hook";
import { useState } from "react";

const GenerateImage = () => {
  const [prompt, setPrompt] = useState("");
  const [selectedModel, setSelectedModel] = useState("stable-diffusion-xl");
  const [isGenerating, setIsGenerating] = useState(false);
  const { mutate: genImgSDXL, isPending, isSuccess } = useGenIMGSDXL();
  const {
    mutate: genImgFlux1snell,
    isPending: isPendingFlux1snell,
    isSuccess: isSuccessFlux1snell,
  } = useGenIMGFlux1snell();
  const { data: allImages } = useGetAllGenImages();

  console.log(allImages);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsGenerating(true);

    if (selectedModel === "stable-diffusion-xl") {
      genImgSDXL(prompt);
    } else {
      genImgFlux1snell(prompt);
    }

    // Simulate API call
    setTimeout(() => {
      setIsGenerating(
        isPending || !isSuccess || isPendingFlux1snell || !isSuccessFlux1snell
      );
    }, 2000);
  };

  return (
    <div className="min-h-[calc(100vh-200px)] py-10 space-y-12">
      {/* Prompt Section */}
      <div className="glass w-full max-w-3xl mx-auto p-8 md:p-12 rounded-2xl card-shadow">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-gradient text-5xl md:text-6xl font-bold mb-4">
            Generate Image
          </h1>
          <p className="text-light-100 text-lg">
            Describe your vision and let AI bring it to life
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Model Selection */}
          <div className="space-y-3">
            <label
              htmlFor="modelSelect"
              className="block text-light-100 text-sm font-medium"
            >
              Select Model
            </label>
            <select
              id="modelSelect"
              name="modelSelect"
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              className="w-full px-4 py-3 bg-dark-100 border border-border-dark rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 cursor-pointer"
              disabled={isGenerating}
            >
              <option value="stable-diffusion-xl">
                Stable Diffusion XL Base 1.0
              </option>
              <option value="flux-schnell">Flux.1 Schnell</option>
            </select>
          </div>

          {/* Textarea */}
          <div className="space-y-3">
            <label
              htmlFor="imagePrompt"
              className="block text-light-100 text-sm font-medium"
            >
              Enter Your Prompt
            </label>
            <textarea
              id="imagePrompt"
              name="imagePrompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="A serene landscape with mountains at sunset, vibrant colors, photorealistic..."
              rows={6}
              className="w-full px-4 py-3 bg-dark-100 border border-border-dark rounded-lg text-foreground placeholder:text-light-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition-all duration-200"
              disabled={isGenerating}
            />
            <p className="text-light-200 text-xs">{prompt.length} characters</p>
          </div>

          {/* Generate Button */}
          <button
            type="submit"
            disabled={!prompt.trim() || isGenerating}
            className="w-full cursor-pointer bg-linear-to-r from-primary to-blue text-dark-100 font-semibold py-4 px-8 rounded-lg hover:opacity-90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-lg"
          >
            {isGenerating ? (
              <>
                <svg
                  className="animate-spin h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <span>Generating...</span>
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Generate Image</span>
              </>
            )}
          </button>
        </form>

        {/* Tips Section */}
        <div className="mt-8 p-4 bg-dark-200 border border-border-dark rounded-lg">
          <h3 className="text-light-100 font-semibold mb-2 text-sm">
            💡 Tips for better results:
          </h3>
          <ul className="text-light-200 text-xs space-y-1 list-none">
            <li>• Be specific and descriptive</li>
            <li>• Include details about style, mood, and lighting</li>
            <li>• Mention colors, composition, and perspective</li>
          </ul>
        </div>
      </div>

      {/* Generated Images Gallery */}
      {allImages?.data && allImages.data.length > 0 && (
        <div className="w-full max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-gradient text-3xl md:text-4xl font-bold mb-2">
              Latest Generated Images
            </h2>
            <p className="text-light-100">
              {allImages.data.length}{" "}
              {allImages.data.length === 1 ? "image" : "images"} generated
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allImages.data
              .slice()
              .reverse()
              .map((image: any) => (
                <div
                  key={image._id}
                  className="glass rounded-xl overflow-hidden card-shadow group cursor-pointer transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={image.url}
                      alt="Generated image"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-linear-to-t from-dark-100 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
                        <a
                          href={image.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-white hover:text-primary transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                          <span className="text-sm font-medium">View</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {(!allImages?.data || allImages.data.length === 0) && (
        <div className="w-full max-w-3xl mx-auto">
          <div className="glass p-12 rounded-2xl text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mx-auto mb-4 text-light-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <h3 className="text-light-100 text-xl font-semibold mb-2">
              No images generated yet
            </h3>
            <p className="text-light-200">
              Start by entering a prompt above and generating your first image!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GenerateImage;
