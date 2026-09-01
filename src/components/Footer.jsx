// src/components/Footer.jsx
import { BiLogoInstagram, BiEnvelope } from "react-icons/bi";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="text-center text-[var(--muted)] border-t border-[var(--rule)] pt-14 pb-12 px-6 bg-[var(--cream)]"
      role="contentinfo"
    >
      <div className="max-w-4xl mx-auto">
        <h3 className="font-serif text-3xl text-[var(--charcoal)] mb-2">Sheelwalia Designs</h3>
        <p className="text-[var(--muted)] mb-6 text-sm tracking-wide text-center">
          <a
            href="mailto:hello@sheelwaliadesigns.com"
            className="hover:underline hover:text-peach transition-colors"
          >
            hello@sheelwaliadesigns.com
          </a>
        </p>

        <nav
          className="flex justify-center space-x-8 mb-6"
          aria-label="Footer social links"
        >
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--muted)] hover:text-peach transition-colors duration-300 flex items-center gap-2 group"
            aria-label="Visit Sheelwalia Designs on Instagram"
          >
            <BiLogoInstagram className="text-xl" aria-hidden="true" />
            <span className="text-sm group-hover:underline">Instagram</span>
          </a>

          <a
            href="mailto:hello@sheelwaliadesigns.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--muted)] hover:text-peach transition-colors duration-300 flex items-center gap-2 group"
            aria-label="Send an email to Sheelwalia Designs"
          >
            <BiEnvelope className="text-xl" aria-hidden="true" />
            <span className="text-sm group-hover:underline">Email</span>
          </a>
        </nav>

        <div className="border-t border-[var(--coffee)] pt-6">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#A8A398]">
            © {year} Sheelwalia Designs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
