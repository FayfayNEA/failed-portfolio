import type { Metadata } from "next";
import { ContactGate } from "./ContactGate";

export const metadata: Metadata = {
  description: "Get in touch, email, resume, and social links.",
};

export default function ContactPage() {
  return <ContactGate />;
}
