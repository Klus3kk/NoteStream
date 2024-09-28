"use client"
import "./globals.css";
import { QueryClient, QueryClientProvider } from 'react-query';
import type { ReactNode } from 'react';


const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
