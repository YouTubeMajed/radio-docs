import "./globals.css";
import { Nunito } from "next/font/google";
import { Providers } from "./providers";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Docs - Radio 24/7",
  description: "Documentation of Radio 24/7",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
