"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { MagneticButton } from "@/components/ui/MagneticButton";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const subjects = [
  "General Inquiry",
  "Sponsorship",
  "Outreach Partnership",
  "Media",
  "Join the Team",
  "Other",
];

export function ContactForm() {
  const [done, setDone] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({ defaultValues: { subject: subjects[0] } });

  const onSubmit = (data: FormValues) => {
    const q = new URLSearchParams({
      subject: `${data.subject} — ${data.name}`,
      body: `From: ${data.name}\nEmail: ${data.email}\n\n${data.message}`,
    });
    window.location.href = `mailto:frc4013.clockworkmania@gmail.com?${q.toString()}`;
    setDone(true);
    reset();
  };

  return (
    <div className="relative min-h-[480px]">
      <AnimatePresence mode="wait">
        {done ? (
          <motion.div
            key="t"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-card border border-[rgba(13,13,13,0.08)] bg-white p-12 text-center shadow-sm"
          >
            <p className="font-bebas text-5xl text-maroon">THANK YOU</p>
            <p className="mt-4 font-inter text-[#3d3835]">
              Your email client should open with your message prefilled.
            </p>
            <div className="mt-8 flex justify-center">
              <MagneticButton
                type="button"
                variant="ghost"
                theme="light"
                onClick={() => setDone(false)}
                ariaLabel="Send another message"
              >
                Send another
              </MagneticButton>
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="f"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5 rounded-card border border-[rgba(13,13,13,0.08)] bg-white p-8 shadow-sm"
          >
            <div>
              <label className="font-space text-xs uppercase tracking-[0.1em] text-[#5c534c]">
                Name *
              </label>
              <input
                className="mt-2 w-full rounded-card border border-[#d8d0c8] bg-[#faf8f6] px-4 py-3 font-inter text-[#0d0d0d] outline-none focus:border-maroon"
                {...register("name", { required: "Required" })}
              />
              {errors.name && (
                <p className="mt-1 font-space text-xs text-maroon">{errors.name.message}</p>
              )}
            </div>
            <div>
              <label className="font-space text-xs uppercase tracking-[0.1em] text-[#5c534c]">
                Email *
              </label>
              <input
                type="email"
                className="mt-2 w-full rounded-card border border-[#d8d0c8] bg-[#faf8f6] px-4 py-3 font-inter text-[#0d0d0d] outline-none focus:border-maroon"
                {...register("email", {
                  required: "Required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email",
                  },
                })}
              />
              {errors.email && (
                <p className="mt-1 font-space text-xs text-maroon">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label className="font-space text-xs uppercase tracking-[0.1em] text-[#5c534c]">
                Subject
              </label>
              <select
                className="mt-2 w-full rounded-card border border-[#d8d0c8] bg-[#faf8f6] px-4 py-3 font-inter text-[#0d0d0d] outline-none focus:border-maroon"
                {...register("subject")}
              >
                {subjects.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="font-space text-xs uppercase tracking-[0.1em] text-[#5c534c]">
                Message *
              </label>
              <textarea
                rows={5}
                className="mt-2 w-full rounded-card border border-[#d8d0c8] bg-[#faf8f6] px-4 py-3 font-inter text-[#0d0d0d] outline-none focus:border-maroon"
                {...register("message", { required: "Required" })}
              />
              {errors.message && (
                <p className="mt-1 font-space text-xs text-maroon">{errors.message.message}</p>
              )}
            </div>
            <MagneticButton type="submit" theme="light" variant="primary" ariaLabel="Submit contact form">
              Submit
            </MagneticButton>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
