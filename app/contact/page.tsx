import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch — email, resume, and social links.",
};

export default function ContactPage() {
  return <ContactClient />;
}
