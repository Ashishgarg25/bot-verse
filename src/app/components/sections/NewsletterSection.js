// components/NewsletterSection.js
"use client"

import { useState } from "react";
import Image from "next/image";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: "success", message: "Thanks for subscribing!" });
        setEmail("");
      } else {
        setStatus({ type: "error", message: data.message || "Something went wrong" });
      }
    } catch (error) {
      setStatus({ type: "error", message: "An error occurred. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative z-10 overflow-hidden bg-gray py-12.5">
      <div className="absolute left-0 top-0 -z-1 h-full w-full">
        <Image
          alt="dot"
          loading="lazy"
          width={1349}
          height={183}
          src="/bg-dots.svg"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <div className="rounded-[10px] bg-white px-4 py-9 shadow-1 sm:px-8 xl:px-10">
          <div className="flex flex-wrap items-center justify-between gap-10">
            <div className="w-full max-w-[455px]">
              <h3 className="mb-3 text-heading-6 font-semibold text-dark">
                Subscribe to Newsletter
              </h3>
              <p>
                Provide your email to get email notification when we launch new
                products or publish new articles
              </p>
            </div>
            <div className="w-full max-w-[494px]">
              <form onSubmit={handleSubmit}>
                <div className="flex items-center flex-wrap gap-5">
                  <div className="w-full max-w-[350px]">
                    <input
                      id="email"
                      required
                      placeholder="Enter your Email"
                      className="w-full rounded-md border border-gray-3 bg-white px-5 py-3.5 outline-none placeholder:text-dark-5 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-dark-4/20"
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center justify-center rounded-md bg-dark px-5.5 py-3.5 font-medium text-white transition-all duration-300 ease-linear hover:opacity-90 disabled:opacity-70"
                  >
                    {isSubmitting ? "Subscribing..." : "Subscribe"}
                  </button>
                </div>
                {status.message && (
                  <div className={`mt-3 text-sm ${status.type === "error" ? "text-red-500" : "text-green-500"}`}>
                    {status.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}