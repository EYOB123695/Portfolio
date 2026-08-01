import type { Metadata } from "next";
import { Inter, Fira_Code, Plus_Jakarta_Sans } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eyob Tesfaye Mulugeta | Software Engineer",
  description:
    "Software Engineer specializing in Mobile Development (Flutter/Dart), Full-Stack, AI/ML Systems, and Backend Engineering in Go & Python. 800+ LeetCode problems solved.",
  keywords: [
    "Eyob Tesfaye Mulugeta",
    "Software Engineer",
    "Flutter",
    "React",
    "Go",
    "Python",
    "AI Engineer",
    "Full Stack Developer",
    "Addis Ababa",
  ],
  authors: [{ name: "Eyob Tesfaye Mulugeta" }],
  openGraph: {
    title: "Eyob Tesfaye Mulugeta - Software Engineer",
    description:
      "Software Engineer specializing in Mobile, Full-Stack, AI Systems & Cloud Architecture. 800+ LeetCode solved.",
    type: "website",
    locale: "en_US",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${firaCode.variable} ${plusJakartaSans.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
