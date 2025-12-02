"use client";

import { useState } from "react";

const GenerateImage = () => {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsGenerating(true);
    // TODO: Add your image generation API call here
    console.log("Generating image with prompt:", prompt);

    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-10">
      <div className="glass w-full max-w-3xl p-8 md:p-12 rounded-2xl card-shadow">
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
            className="w-full bg-linear-to-r from-primary to-blue text-dark-100 font-semibold py-4 px-8 rounded-lg hover:opacity-90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-lg"
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
    </div>
  );
};

export default GenerateImage;
