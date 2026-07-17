import type { Metadata } from "next";
import { OrbClient } from "./orb-client";

export const metadata: Metadata = {
  description: "Orb — placeholder description, update once the project details are set.",
};

export default function OrbPage() {
  return <OrbClient />;
}
