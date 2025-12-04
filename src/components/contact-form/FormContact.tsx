"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Label } from "@radix-ui/react-label";
import { Input } from "./Input";
import { Textarea } from "./TextArea";
import { Button } from "../stateful-button/Button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContex";
import { dictionary } from "../../locale/dictionary";
import { useToast } from "@/components/ui/Toast";
import { trackFormSubmission } from "@/lib/analytics";

export default function FormContact() {
  const { language } = useLanguage(); // 'ES' | 'EN'
  const t = dictionary[language].form;
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {
      firstname: "",
      lastname: "",
      email: "",
      message: "",
    };

    if (!formData.firstname.trim()) {
      newErrors.firstname = "El nombre es requerido";
    }
    if (!formData.lastname.trim()) {
      newErrors.lastname = "El apellido es requerido";
    }
    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "El email no es válido";
    }
    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido";
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== "");
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      showToast("error", "Por favor, completa todos los campos correctamente");
      return;
    }

    setLoading(true);

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        {
          reply_to: formData.email,
          firstname: formData.firstname,
          lastname: formData.lastname,
          message: formData.message,
          user_email: formData.email,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID || ""
      );
      console.log("✅ Email sent successfully", result.text);

      trackFormSubmission(true, language);
      showToast("success", "¡Mensaje enviado exitosamente!");
      setFormData({ firstname: "", lastname: "", email: "", message: "" });
      setErrors({ firstname: "", lastname: "", email: "", message: "" });
    } catch (err) {
      console.error("❌ Error sending email:", err);
      trackFormSubmission(false, language);
      showToast("error", "Error al enviar el mensaje. Por favor, intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="relative">
      <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white/20 dark:bg-black/20 backdrop-blur-md p-4 md:rounded-2xl md:p-8">
        <form className="my-8" onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
            <LabelInputContainer>
              <Label htmlFor="firstname">{t.firstname}</Label>
              <Input
                id="firstname"
                name="firstname"
                placeholder={t.placeholder.firstname}
                type="text"
                value={formData.firstname}
                onChange={handleChange}
                aria-invalid={errors.firstname ? "true" : "false"}
                aria-describedby={errors.firstname ? "firstname-error" : undefined}
                required
              />
              {errors.firstname && (
                <span id="firstname-error" role="alert" className="text-sm text-red-600 dark:text-red-400 mt-1">
                  {errors.firstname}
                </span>
              )}
            </LabelInputContainer>

            <LabelInputContainer>
              <Label htmlFor="lastname">{t.lastname}</Label>
              <Input
                id="lastname"
                name="lastname"
                placeholder={t.placeholder.lastname}
                type="text"
                value={formData.lastname}
                onChange={handleChange}
                aria-invalid={errors.lastname ? "true" : "false"}
                aria-describedby={errors.lastname ? "lastname-error" : undefined}
                required
              />
              {errors.lastname && (
                <span id="lastname-error" role="alert" className="text-sm text-red-600 dark:text-red-400 mt-1">
                  {errors.lastname}
                </span>
              )}
            </LabelInputContainer>
          </div>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">{t.email}</Label>
            <Input
              id="email"
              name="email"
              placeholder={t.placeholder.email}
              type="email"
              value={formData.email}
              onChange={handleChange}
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
              required
            />
            {errors.email && (
              <span id="email-error" role="alert" className="text-sm text-red-600 dark:text-red-400 mt-1">
                {errors.email}
              </span>
            )}
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="message">{t.message}</Label>
            <Textarea
              id="message"
              name="message"
              placeholder={t.placeholder.message}
              value={formData.message}
              onChange={handleChange}
              aria-invalid={errors.message ? "true" : "false"}
              aria-describedby={errors.message ? "message-error" : undefined}
              required
            />
            {errors.message && (
              <span id="message-error" role="alert" className="text-sm text-red-600 dark:text-red-400 mt-1">
                {errors.message}
              </span>
            )}
          </LabelInputContainer>

          <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

          <Button className="w-full" type="submit" disabled={loading}>
            {loading ? t.sending : t.send}
          </Button>
        </form>
      </div>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("flex w-full flex-col space-y-2", className)}>
    {children}
  </div>
);
