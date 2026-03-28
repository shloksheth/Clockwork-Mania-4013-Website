"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { sponsorTiers } from "@/data/sponsor-tiers";
type FormValues = {
  name: string;
  organization: string;
  email: string;
  phone: string;
  tier: string;
  message: string;
};

const tierOptions = sponsorTiers.map((t) => ({
  id: t.id,
  label: `${t.name} — ${t.range}`,
}));

const fieldClass =
  "w-full rounded-md border border-[rgba(201,151,58,0.2)] bg-[rgba(255,255,255,0.04)] px-[18px] py-3.5 font-inter text-[15px] text-offwhite placeholder:text-text-muted outline-none transition-[border,box-shadow,background] focus:border-[rgba(201,151,58,0.7)] focus:bg-[rgba(255,255,255,0.06)] focus:shadow-[0_0_0_3px_rgba(201,151,58,0.08)]";

const labelClass =
  "mb-2 block font-space text-xs uppercase tracking-[0.1em] text-gold";

export function SponsorForm() {
  const [submitted, setSubmitted] = useState(false);
  const reduce = useReducedMotion();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    defaultValues: { tier: tierOptions[0].id },
  });

  const onSubmit = (data: FormValues) => {
    void data;
    /* TODO: POST to form API; currently simulated success only */
    setSubmitted(true);
    reset();
  };

  return (
    <div className="relative min-h-[420px]">
      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: reduce ? 0 : 0.35 }}
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-5 md:grid-cols-2"
            noValidate
          >
            <div>
              <label className={labelClass}>Name *</label>
              <input
                className={`${fieldClass} ${errors.name ? "border-[#c0392b] shadow-[0_0_0_3px_rgba(192,57,43,0.1)]" : ""}`}
                {...register("name", { required: "Required" })}
                aria-invalid={!!errors.name}
              />
              {errors.name && (
                <p className="mt-1 font-inter text-xs text-[#e74c3c]">{errors.name.message}</p>
              )}
            </div>
            <div>
              <label className={labelClass}>Organization</label>
              <input className={fieldClass} {...register("organization")} />
            </div>
            <div>
              <label className={labelClass}>Email *</label>
              <input
                type="email"
                className={`${fieldClass} ${errors.email ? "border-[#c0392b] shadow-[0_0_0_3px_rgba(192,57,43,0.1)]" : ""}`}
                {...register("email", {
                  required: "Required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email",
                  },
                })}
                aria-invalid={!!errors.email}
              />
              {errors.email && (
                <p className="mt-1 font-inter text-xs text-[#e74c3c]">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label className={labelClass}>Phone</label>
              <input type="tel" className={fieldClass} {...register("phone")} />
            </div>
            <div className="md:col-span-2">
              <label className={labelClass}>Sponsorship tier *</label>
              <select
                className={fieldClass}
                {...register("tier", { required: true })}
              >
                {tierOptions.map((t) => (
                  <option key={t.id} value={t.id} className="bg-[#1a1a1a]">
                    {t.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <label className={labelClass}>Message *</label>
              <textarea
                rows={5}
                className={`${fieldClass} ${errors.message ? "border-[#c0392b] shadow-[0_0_0_3px_rgba(192,57,43,0.1)]" : ""}`}
                {...register("message", {
                  required: "Required",
                  minLength: { value: 10, message: "At least 10 characters" },
                })}
                aria-invalid={!!errors.message}
              />
              {errors.message && (
                <p className="mt-1 font-inter text-xs text-[#e74c3c]">{errors.message.message}</p>
              )}
            </div>
            <div className="md:col-span-2">
              <MagneticButton type="submit" className="w-full md:w-auto" ariaLabel="Send inquiry">
                Send Inquiry →
              </MagneticButton>
            </div>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={
              reduce
                ? { duration: 0 }
                : { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
            }
            className="py-16 text-center"
          >
            <motion.div
              className="mx-auto mb-8 h-24 w-24 text-maroon"
              animate={reduce ? {} : { rotate: 360 }}
              transition={
                reduce
                  ? {}
                  : { duration: 32, repeat: Infinity, ease: "linear" }
              }
              aria-hidden
            >
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="currentColor"
                  d="M50 6l6 12 13-2 8 11 12 4-2 13 9 10-9 10-12-4-4 12-11 8 2 13-12 6-12-6-13 2-8-11-12-4 2-13-9-10 9-10 12 4 4-12 11-8-2-13 12-6z"
                  opacity="0.9"
                />
                <circle cx="50" cy="50" r="18" stroke="var(--color-gold)" strokeWidth="2" />
              </svg>
            </motion.div>
            <p className="font-display text-[clamp(48px,8vw,64px)] text-gold">Thank You!</p>
            <p className="mt-4 font-editorial text-xl italic text-[rgba(245,240,235,0.65)]">
              We&apos;ll be in touch shortly.
            </p>
            <div className="mt-10 flex justify-center">
              <MagneticButton href="/" variant="ghost">
                Back to Home
              </MagneticButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
