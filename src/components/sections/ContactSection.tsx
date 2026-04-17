"use client";

/**
 * ContactSection — conversion block with form and professional links.
 * Form uses Formspree.
 */

import { useState } from "react";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import { useTranslation } from "@/i18n/useTranslation";

export default function ContactSection() {
  const { t, locale } = useTranslation();
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mvzdakkw", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("success");
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32" aria-label="Contact">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6">
          {/* Left Column — Heading and Info */}
          <div className="lg:col-span-4">
            <SectionHeading>{t.contact.heading}</SectionHeading>

            <p className="text-body text-swiss-gray-100 mb-10 max-w-sm">
              {t.contact.description}
            </p>

            {/* Links — Featuring Director Frame (L at top-left, inverted L at bottom-right) */}
            <div className="flex gap-8">
              <a
                href="https://github.com/CJ-arg"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group px-1 flex items-center justify-center text-caption text-swiss-gray-300 hover:text-swiss-white transition-colors duration-300"
                aria-label="GitHub profile"
              >
                <span className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t border-l border-swiss-accent group-hover:w-full group-hover:h-full transition-all duration-300" />
                <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b border-r border-swiss-accent group-hover:w-full group-hover:h-full transition-all duration-300" />
                <span className="relative z-10 px-2 py-1">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/carlos-janon/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group px-1 flex items-center justify-center text-caption text-swiss-gray-300 hover:text-swiss-white transition-colors duration-300"
                aria-label="LinkedIn profile"
              >
                <span className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t border-l border-swiss-accent group-hover:w-full group-hover:h-full transition-all duration-300" />
                <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b border-r border-swiss-accent group-hover:w-full group-hover:h-full transition-all duration-300" />
                <span className="relative z-10 px-2 py-1">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column — Form */}
          <div className="lg:col-span-7 lg:col-start-6 min-h-[400px]">
            {formStatus === "success" ? (
              <div className="flex h-full items-center">
                <div className="border border-swiss-accent bg-swiss-black p-8">
                  <h3 className="text-h2 text-swiss-white mb-2">
                    {locale === "en" ? "Message Sent" : "Mensaje Enviado"}
                  </h3>
                  <p className="text-body text-swiss-gray-300">
                    {locale === "en"
                      ? "Thank you for reaching out. I'll get back to you shortly."
                      : "Gracias por tu mensaje. Te responderé a la brevedad."}
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Name */}
                  <div className="flex-1 flex flex-col gap-2">
                    <label htmlFor="name" className="text-caption text-swiss-gray-300">
                      {t.contact.nameLabel}
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      className="w-full bg-transparent border-b border-swiss-gray-700 py-2 text-swiss-white focus:border-swiss-accent focus:outline-none transition-colors"
                    />
                  </div>
                  {/* Phone */}
                  <div className="flex-1 flex flex-col gap-2">
                    <label htmlFor="phone" className="text-caption text-swiss-gray-300">
                      {t.contact.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      className="w-full bg-transparent border-b border-swiss-gray-700 py-2 text-swiss-white focus:border-swiss-accent focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-caption text-swiss-gray-300">
                    {t.contact.emailLabel}
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full bg-transparent border-b border-swiss-gray-700 py-2 text-swiss-white focus:border-swiss-accent focus:outline-none transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-caption text-swiss-gray-300">
                    {t.contact.messageLabel}
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows={4}
                    className="w-full bg-transparent border-b border-swiss-gray-700 py-2 text-swiss-white resize-none focus:border-swiss-accent focus:outline-none transition-colors"
                  />
                </div>

                {/* Error Message */}
                {formStatus === "error" && (
                  <p className="text-caption text-swiss-accent">
                    {locale === "en"
                      ? "There was an error sending the message. Please try again."
                      : "Hubo un error al enviar el mensaje. Por favor intenta otra vez."}
                  </p>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="self-start mt-4 inline-flex items-center gap-2 text-caption border border-swiss-accent bg-swiss-accent text-swiss-white px-8 py-4 transition-all duration-300 hover:bg-transparent disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-swiss-accent"
                >
                  {formStatus === "submitting" 
                    ? (locale === "en" ? "Sending..." : "Enviando...") 
                    : t.contact.submitLabel}
                  <span aria-hidden="true">→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
