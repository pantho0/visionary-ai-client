"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { Toaster } from "sonner";

export const Providers = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster
        position="top-center"
        richColors
        duration={2000}
        toastOptions={{
          style: { background: "#030708", color: "#59DECA" }, // Sets background to blue and text to white
          // You can also use `classes` for Tailwind CSS styling
          // classes: {
          //   toast: 'bg-blue-500 text-white',
          //   title: 'text-lg',
          //   description: 'text-sm',
          // },
        }}
      />
      {children}
    </QueryClientProvider>
  );
};
