import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About",
  description: "Designer and creative technologist, background, focus, and approach.",
};

export default function AboutPage() {
  return <AboutClient />;
}
