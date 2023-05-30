// app/providers.tsx
"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
const theme = extendTheme({
  fonts: {
    heading: `'Nunito', sans-serif`,
    body: `'Nunito', sans-serif`,
  },
  styles: {
    global: (props: any) => ({
      body: {
        bgGradient: "linear(to-b, #4173D4, #157269, #0C473D) !important",
        bgSize: "cover !important",
        bgRepeat: "no-repeat !important",
        h: "100vh",
        w: "100vw",
      },
    }),
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
