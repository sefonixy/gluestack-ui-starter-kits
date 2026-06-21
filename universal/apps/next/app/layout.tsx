"use client";

import { Inter } from "next/font/google";
import StyledJsxRegistry from "./registry";
import { ThemeContextProvider } from "./ThemeContext";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ display: "flex" }}>
        <StyledJsxRegistry>
          <ThemeContextProvider>{children}</ThemeContextProvider>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}

