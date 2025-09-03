"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Label } from "@radix-ui/react-label";
import { Input } from "./Input";
import { Textarea } from "./TextArea";
import { Button } from "../stateful-button/Button";
import { CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { cn } from "@/app/lib/utils";

export default function FormContact() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

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

      setSuccess(true);
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (err) {
      console.error("❌ Error sending email:", err);
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="relative">
      {(success || error) && (
        <>
          <div
            className="fixed inset-0 z-50 bg-black/30 backdrop-blur-md transition-opacity duration-300"
            aria-hidden="true"
          />

          <div
            className={cn(
              "fixed z-60 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
              "w-[90%] max-w-sm rounded-2xl px-6 py-4 flex flex-col items-center justify-center gap-4",
              "backdrop-blur-md animate-fade-in transition-transform duration-300",
              // 🌞 Light mode: glass effect
              "bg-white/20 border border-white/30 shadow-[0_0_40px_rgba(255,255,255,0.6)]",
              "text-white drop-shadow-[0_0_6px_rgba(0,0,0,0.5)]",
              // 🌙 Dark mode: neon magenta glow
              "dark:bg-black/20 dark:border dark:border-[#ff00ff] dark:shadow-[0_0_30px_#ff00ff]",
              "dark:text-[#ff00ff] dark:drop-shadow-[0_0_4px_#ff00ff]"
            )}
            role="alert"
            aria-live="assertive"
          >
            {success && (
              <>
                <CheckCircle
                  size={48}
                  className="text-white drop-shadow-[0_0_8px_rgba(0,0,0,0.7)] dark:text-[#ff00ff] dark:drop-shadow-[0_0_6px_#ff00ff]"
                />
                <p className="text-center text-lg font-semibold">
                  Formulario enviado correctamente
                </p>
              </>
            )}
            {error && (
              <>
                <AlertCircle
                  size={48}
                  className="text-white drop-shadow-[0_0_8px_rgba(0,0,0,0.7)] dark:text-red-600 dark:drop-shadow-[0_0_6px_red]"
                />
                <p className="text-center text-lg font-semibold">
                  Error al enviar el formulario
                </p>
              </>
            )}
            <button
              onClick={() => {
                setSuccess(false);
                setError(false);
              }}
              className="mt-2 hover:scale-110 transition-transform"
              aria-label="Cerrar alerta"
            >
              <XCircle
                size={28}
                className={cn(
                  "text-white drop-shadow-[0_0_8px_rgba(0,0,0,0.7)]",
                  success
                    ? "dark:text-[#ff00ff] dark:drop-shadow-[0_0_4px_#ff00ff]"
                    : "dark:text-red-600 dark:drop-shadow-[0_0_4px_red]"
                )}
              />
            </button>
          </div>
        </>
      )}

      <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white/20 dark:bg-black/20 backdrop-blur-md p-4 md:rounded-2xl md:p-8">
        <form className="my-8" onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input
                id="firstname"
                name="firstname"
                placeholder="Name"
                type="text"
                value={formData.firstname}
                onChange={handleChange}
                required
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input
                id="lastname"
                name="lastname"
                placeholder="Last Name"
                type="text"
                value={formData.lastname}
                onChange={handleChange}
                required
              />
            </LabelInputContainer>
          </div>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              placeholder="example@example.com"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="message">Your message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>

          <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
          <Button className="w-full" type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send"}
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
