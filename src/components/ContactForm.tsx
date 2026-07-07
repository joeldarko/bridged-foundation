"use client";

import { useState } from "react";
import { Icon } from "@/components/Icon";

/*
  Front-end only for now (matches the current site). Shows a success state and
  does not send. To receive messages, point `action` at Formspree / Netlify Forms
  and remove the preventDefault below — or wire it to the future backend.
  Minimal underline fields: field chrome, not layout borders.
*/
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  const field =
    "w-full border-0 border-b-2 border-line bg-transparent px-0 py-3 text-lg text-ink placeholder:text-ink-muted transition-colors focus:border-accent focus:outline-none";

  return (
    <form onSubmit={handleSubmit}>
      {sent ? (
        <div className="flex items-center gap-3 py-6 text-accent-deep" aria-live="polite">
          <Icon name="Check" size={24} weight="bold" className="flex-none" />
          <span className="text-lg font-medium text-ink">
            Thank you. Your message has been received and we will be in touch soon.
          </span>
        </div>
      ) : (
        <div className="flex flex-col gap-9">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-semibold text-ink">
              Name <span className="text-accent-deep">*</span>
            </label>
            <input id="name" name="name" type="text" autoComplete="name" required placeholder="Your full name" className={field} />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-semibold text-ink">
              Email <span className="text-accent-deep">*</span>
            </label>
            <input id="email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" className={field} />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-semibold text-ink">
              Message <span className="text-accent-deep">*</span>
            </label>
            <textarea id="message" name="message" required rows={4} placeholder="How would you like to get involved?" className={field} />
          </div>
          <div>
            <button
              type="submit"
              className="inline-flex h-13 items-center justify-center gap-2 rounded-pill bg-accent px-8 text-base font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-accent-strong active:translate-y-px"
            >
              Send Message
              <Icon name="ArrowRight" size={18} />
            </button>
            <p className="mt-5 text-sm text-ink-muted">
              We respect your privacy and will only use your details to respond to you.
            </p>
          </div>
        </div>
      )}
    </form>
  );
}
