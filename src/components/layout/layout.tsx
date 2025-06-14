import { Inter, PT_Sans_Caption } from "next/font/google";
import { Header } from "./header";
import { Footer } from "./footer";
import { CallToActionSection } from "@/templates/landing-page/sections";

type LayoutProps = {
  children: React.ReactNode;
};

const ptSansCaption = PT_Sans_Caption({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-sans",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

export function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <div
      className={`${inter.className} ${ptSansCaption.className} relative text-body-md flex min-h-screen flex-col font-inter bg-gray-700`}
    >
      <Header />
      <main className="flex-1 flex flex-col mt-10">{children}</main>

      <CallToActionSection />
      <Footer />
    </div>
  );
}
