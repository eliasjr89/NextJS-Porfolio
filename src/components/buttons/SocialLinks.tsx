"use client";

import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { SocialButton } from "./SocialButton";

export function SocialLinks() {
  const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL || "#";
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL || "#";
  const email = process.env.NEXT_PUBLIC_EMAIL || "#";
  const whatsappUrl = process.env.NEXT_PUBLIC_WHATSAPP_URL || "#";

  return (
    <div className="flex gap-6 items-center mt-10">
      <SocialButton
        href={linkedinUrl}
        label="LinkedIn Profile"
        icon={FaLinkedin}
        hoverColor="hover:text-blue-600"
      />
      <SocialButton
        href={githubUrl}
        label="GitHub Profile"
        icon={FaGithub}
        hoverColor="hover:text-gray-900"
      />
      <SocialButton
        href={`mailto:${email}`}
        label="Send an email"
        icon={SiGmail}
        hoverColor="hover:text-red-600"
      />
      <SocialButton
        href={whatsappUrl}
        label="WhatsApp"
        icon={FaWhatsapp}
        hoverColor="hover:text-green-600"
      />
    </div>
  );
}
