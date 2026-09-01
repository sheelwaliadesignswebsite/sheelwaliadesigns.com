"use client";

import { useState } from "react";
import {
  BiLogoInstagram,
  BiLogoWhatsapp,
  BiPhoneCall,
  BiMailSend,
} from "react-icons/bi";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/atelier@sheelwaliadesigns.com",
        {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        }
      );
      const data = await res.json();

      if (data.success === "true") {
        setSubmitted(true);
        form.reset();
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2 className="font-serif text-3xl text-center mb-3 text-charcoal">
        Sheelwalia Designs
      </h2>
      <p className="text-center text-[var(--muted)] mb-5">
        Let’s create a space that feels luxurious, warm, and uniquely yours.
      </p>

      <div className="flex justify-center gap-6 mb-2" aria-label="Social links">
        <a
          href="https://www.instagram.com/sheelwalia_designs?igsi=ZXFoZWd3cTB0ZzU5"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="p-3 bg-[var(--skin)] hover:bg-[var(--peach)] transition-colors"
        >
          <BiLogoInstagram
            className="w-5 h-5 text-gray-700"
            aria-hidden="true"
          />
        </a>
        <a
          href="mailto:atelier@sheelwaliadesigns.com"
          aria-label="Email"
          className="p-3 bg-[var(--skin)] hover:bg-[var(--peach)] transition-colors"
        >
          <BiMailSend className="w-5 h-5 text-gray-700" aria-hidden="true" />
        </a>
        <a
          href="https://wa.me/918126819191"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="p-3 bg-[var(--skin)] hover:bg-[var(--peach)] transition-colors"
        >
          <BiLogoWhatsapp
            className="w-5 h-5 text-gray-700"
            aria-hidden="true"
          />
        </a>
        <a
          href="tel:+918126819191"
          aria-label="Call"
          className="p-3 bg-[var(--skin)] hover:bg-[var(--peach)] transition-colors"
        >
          <BiPhoneCall className="w-5 h-5 text-gray-700" aria-hidden="true" />
        </a>
      </div>

      <div className="border-t border-[var(--coffee)] my-6" />

      <h2 className="font-serif text-3xl text-center mb-4 text-charcoal">
        Let’s Design Your Dream Space
      </h2>

      {!submitted ? (
        <form
          action="https://formsubmit.co/ajax/atelier@sheelwaliadesigns.com"
          method="POST"
          onSubmit={handleSubmit}
          className="space-y-6"
          aria-label="Contact form"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              aria-label="Name"
              className="w-full p-4 bg-[var(--skin)] text-charcoal border border-transparent focus:bg-white focus:border-[var(--peach)] focus:outline-none transition-all"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              aria-label="Email"
              className="w-full p-4 bg-[var(--skin)] text-charcoal border border-transparent focus:bg-white focus:border-[var(--peach)] focus:outline-none transition-all"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              aria-label="Phone"
              className="w-full p-4 bg-[var(--skin)] text-charcoal border border-transparent focus:bg-white focus:border-[var(--peach)] focus:outline-none transition-all"
            />
            <input
              type="text"
              name="project_type"
              placeholder="Project Type"
              aria-label="Project Type"
              className="w-full p-4 bg-[var(--skin)] text-charcoal border border-transparent focus:bg-white focus:border-[var(--peach)] focus:outline-none transition-all"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Message"
              required
              aria-label="Message"
              className="w-full p-4 bg-[var(--skin)] text-charcoal border border-transparent focus:bg-white focus:border-[var(--peach)] focus:outline-none transition-all sm:col-span-2"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-peach text-white text-sm uppercase tracking-[0.2em] hover:bg-coffee transition disabled:opacity-50"
            aria-label="Submit contact form"
          >
            {loading ? "Sending..." : "Let’s Design Your Dream Space"}
          </button>

          {error && (
            <p
              className="text-center text-sm text-red-600 mt-2"
              role="alert"
              aria-live="polite"
            >
              Failed to send. Please try again later.
            </p>
          )}
        </form>
      ) : (
        <div className="text-center py-8" role="status" aria-live="polite">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <p className="text-peach font-semibold">Message sent successfully!</p>
        </div>
      )}
    </>
  );
}
