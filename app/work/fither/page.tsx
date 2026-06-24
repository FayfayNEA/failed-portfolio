import type { Metadata } from "next";
import { FitherClient } from "./fither-client";

export const metadata: Metadata = {
  description: "Organic dithering playground.",
};

export default function FitherWorkPage() {
  return <FitherClient />;
}
